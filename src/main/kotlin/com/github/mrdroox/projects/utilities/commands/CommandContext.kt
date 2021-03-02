package com.github.mrdroox.projects.utilities.commands

import com.github.mrdroox.projects.utilities.others.rioruUtils.RioruTranslates
import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent
import net.dv8tion.jda.api.sharding.ShardManager
import net.dv8tion.jda.api.JDA
import net.dv8tion.jda.api.entities.*
import java.lang.NumberFormatException

class CommandContext(private var event: GuildMessageReceivedEvent, private var args: List<String>, private val locale: String) {
    private val translates = RioruTranslates()
    fun getGuild(): Guild { return event.guild }
    fun getArgs(): List<String> { return args }
    fun getChannel(): TextChannel { return event.channel }
    fun getMessage(): Message { return event.message }
    fun getAuthor(): User { return event.author }
    fun getMember(): Member? { return event.member }
    fun getJDA(): JDA { return event.jda }
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

    fun sendMessage(text: CharSequence) {
        getChannel().sendMessage(getTranslate(text.split(":"))).queue()
    }

    fun sendMessage(text: CharSequence, map: HashMap<String, String>) {
        val translateVal: String = getTranslate(text.split(":"))
        for(a in map) {
            translateVal.replace(a.key, a.value)
        }

        getChannel().sendMessage(translateVal).queue()
    }

    private fun getTranslate(text: List<String>): String { return translates.get(locale, text[0], text[1])?.get(text[2]) as String }
}
