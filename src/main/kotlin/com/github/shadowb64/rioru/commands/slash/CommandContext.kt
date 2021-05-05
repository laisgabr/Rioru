package com.github.shadowb64.rioru.commands.slash

import com.github.shadowb64.rioru.commands.utils.interfaces.ICommandContext
import com.github.shadowb64.rioru.utilities.RioruAPIRequester
import com.github.shadowb64.rioru.utilities.replacePlaceholders
import net.dv8tion.jda.api.events.interaction.SlashCommandEvent
import net.dv8tion.jda.api.requests.restaction.MessageAction

class CommandContext(
    private val event: SlashCommandEvent,
    private val locale: String,
) : ICommandContext {
    override val shardManager by lazy { event.jda.shardManager }
    override val guild = event.guild
    override val member = event.member
    override val jda = event.jda
    val channel = event.channel
    val message = event
    val author = event.user
    val textChannel = event.textChannel

    override fun reply(content: String, map: Map<String, Any>): MessageAction =
        message.reply(translate(content, map)) as MessageAction

    override fun translate(translateUri: String, map: Map<String, Any>) =
        RioruAPIRequester.get("/translates", mapOf("locale" to locale, "query" to translateUri, "slash" to "true")).getString("response")
            .replacePlaceholders(map)
}