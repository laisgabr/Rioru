package website.rioru.projects.rioru.utils.interfaces

import dev.kord.core.event.gateway.ReadyEvent
import dev.kord.core.event.message.MessageCreateEvent

interface IListener {
    fun onReady(parameters: ReadyEvent) {}
    fun onMessageCreated(parameters: MessageCreateEvent) {}
}