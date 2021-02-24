package com.github.mrdroox.projects.utilities.commands

import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent
import net.dv8tion.jda.api.sharding.ShardManager
import net.dv8tion.jda.api.JDA
import net.dv8tion.jda.api.entities.*
import java.lang.NumberFormatException

class CommandContext(private var event: GuildMessageReceivedEvent, private var args: List<String>) {
    fun getGuild(): Guild { return getEvent().guild }
    fun getEvent(): GuildMessageReceivedEvent { return event }
    fun getArgs(): List<String> { return args }
    fun getChannel(): TextChannel { return getEvent().channel }
    fun getMessage(): Message { return getEvent().message }
    fun getAuthor(): User { return getEvent().author }
    fun getMember(): Member? { return getEvent().member }
    fun getJDA(): JDA { return getEvent().jda }
    fun getShardManager(): ShardManager? { return getJDA().shardManager }
    fun getSelfUser(): User { return getJDA().selfUser }
    fun getSelfMember(): Member { return getGuild().selfMember }
    fun user(): Member? {
        when { getMessage().mentionedMembers.isNotEmpty() -> return getMessage().mentionedMembers[0]
            getGuild().getMembersByEffectiveName(getArgs()[0], true).isNotEmpty() -> {
                return getGuild().getMembersByEffectiveName(getArgs()[0], true)[0]
            }
        }
        return try {
            getGuild().getMemberById(getArgs()[0])
        } catch(e: NumberFormatException) {
            null
        }
    }

    fun hasArgsOrMention(): Boolean {
        when { getArgs().isEmpty() && getMessage().mentionedMembers.isEmpty() -> return false }
        return true
    }
}

