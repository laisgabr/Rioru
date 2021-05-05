package com.github.shadowb64.rioru.commands.marshall

import com.github.shadowb64.rioru.commands.utils.interfaces.ICommandContext
import com.github.shadowb64.rioru.utilities.RioruAPIRequester
import com.github.shadowb64.rioru.utilities.replacePlaceholders
import net.dv8tion.jda.api.events.message.MessageReceivedEvent
import net.dv8tion.jda.api.requests.restaction.MessageAction

class CommandContext(
    private val event: MessageReceivedEvent,
    val args: List<String>,
    private val locale: String
) : ICommandContext {
    override val shardManager by lazy { event.jda.shardManager }
    override val guild = event.message.guild
    override val member = event.message.member
    override val jda = event.jda
    val message = event.message
    val channel = event.message.channel
    val author = event.author
    val textChannel = event.textChannel

    override fun reply(content: String, map: Map<String, Any>): MessageAction = message.reply(translate(content, map))
    override fun translate(translateUri: String, map: Map<String, Any>): String =
        RioruAPIRequester.get("/translates", mapOf("locale" to locale, "query" to translateUri)).getString("response")
            .replacePlaceholders(map)
}