package website.rioru.projects.rioru.utils.commands

import dev.kord.core.Kord
import dev.kord.core.event.message.MessageCreateEvent
import website.rioru.projects.rioru.Rioru

class CommandContext(
    event: MessageCreateEvent,
    private val kord: Kord = Rioru.me
) {
    val member = event.member
    val message = event.message
    val author = event.message.author!!
    suspend fun guild() = message.getGuildOrNull()
}