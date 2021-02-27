package com.github.mrdroox.projects.utilities.commands

import com.github.mrdroox.projects.utilities.others.rioruUtils.RioruEmojis
import com.github.mrdroox.projects.utilities.others.rioruUtils.RioruTranslates
import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent
import net.dv8tion.jda.api.sharding.ShardManager
import net.dv8tion.jda.api.JDA
import net.dv8tion.jda.api.entities.*
import java.lang.NumberFormatException

class CommandContext(private var event: GuildMessageReceivedEvent, private var args: List<String>, val locale: String) {
    private val translates = RioruTranslates()
    val emojis = RioruEmojis()
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

    fun translate(emoji: String, uri: String): String {
        val array = uri.split(":")
        return "$emoji | ${getAuthor().asMention} " + translates.get(locale, array[0], array[1])?.get(array[2]) as String
    }

    fun translate(uri: String): String {
        val array = uri.split(":")
        return "${getAuthor().asMention}, " + translates.get(locale, array[0], array[1])?.get(array[2]) as String
    }
}