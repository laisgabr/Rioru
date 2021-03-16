package com.github.mrdrooxbr.rioru.bot.commands.framework

import com.github.mrdrooxbr.rioru.bot.commands.framework.rioru.RioruTranslates
import net.dv8tion.jda.api.EmbedBuilder
import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent
import net.dv8tion.jda.api.sharding.ShardManager
import net.dv8tion.jda.api.JDA
import net.dv8tion.jda.api.entities.*
import java.lang.NumberFormatException

class CommandContext(private var event: GuildMessageReceivedEvent, private var args: List<String>, val locale: String) {
    private val translates = RioruTranslates()
    fun getGuild(): Guild = event.guild
    fun getArgs(): List<String> = args
    fun getChannel(): TextChannel = event.channel
    fun getMessage(): Message = event.message
    fun getAuthor(): User = event.author
    fun getMember(): Member? = event.member
    fun getJDA(): JDA = event.jda
    fun getShardManager(): ShardManager? = getJDA().shardManager
    fun getSelfUser(): User = getJDA().selfUser
    fun getSelfMember(): Member = getGuild().selfMember
    fun user(): Member? {
        when { getMessage().mentionedMembers.isNotEmpty() -> return getMessage().mentionedMembers[0]
            getGuild().getMembersByEffectiveName(getArgs()[0], true).isNotEmpty() -> {
                return getGuild().getMembersByEffectiveName(getArgs()[0], true)[0]
            }
        }
        return try { getGuild().getMemberById(getArgs()[0]) } catch(e: NumberFormatException) { null }
    }

    fun hasArgsOrMention(): Boolean {
        when { getArgs().isEmpty() && getMessage().mentionedMembers.isEmpty() -> return false }
        return true
    }

    fun sendMessage(embed: EmbedBuilder) = getChannel().sendMessage(embed.build()).queue()
}
