package com.github.mrdrooxbr.rioru.bot.commands.framework

import com.github.mrdrooxbr.rioru.bot.commands.framework.rioru.RioruEmojis
import com.github.mrdrooxbr.rioru.bot.commands.framework.rioru.RioruTranslates
import net.dv8tion.jda.api.EmbedBuilder
import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent
import net.dv8tion.jda.api.sharding.ShardManager
import net.dv8tion.jda.api.JDA
import net.dv8tion.jda.api.entities.*

class CommandContext(private var event: GuildMessageReceivedEvent, private var args: List<String>, private val locale: String) {
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
    fun sendMessage(embed: EmbedBuilder) = getChannel().sendMessage(embed.build()).queue()
    fun translate(emoji: String, translateUri: String): String {
        val emote = RioruEmojis.get(emoji)
        val uri = translateUri.split("|")
        return if(uri.size === 2) {
            "$emote | " + translates.get(locale, uri[0]).getString(uri[1])
        } else {
            "$emote | " + translates.get(locale, uri[0]).getJSONObject(uri[1]).getString(uri[2])
        }
    }

    fun translate(translateUri: String): String {
        val uri = translateUri.split("|")
        return if(uri.size === 2) {
            translates.get(locale, uri[0]).getString(uri[1])
        } else {
            translates.get(locale, uri[0]).getJSONObject(uri[1]).getString(uri[2])
        }
    }

}
