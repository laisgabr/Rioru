package website.rioru.projects.rioru.utils

import dev.kord.core.event.gateway.ReadyEvent
import dev.kord.core.event.message.MessageCreateEvent
import website.rioru.projects.rioru.utils.interfaces.IListener

class RioruListener : IListener {
    override fun onReady(parameters: ReadyEvent) {
        println("${parameters.self.username} - Online")
    }

    override suspend fun onMessageCreated(parameters: MessageCreateEvent) {
        if(parameters.message.author!!.isBot) return
        if(!parameters.message.content.contains("r!!")) return
    }
}