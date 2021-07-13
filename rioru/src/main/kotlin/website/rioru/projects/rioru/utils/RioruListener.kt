package website.rioru.projects.rioru.utils

import dev.kord.core.event.gateway.ReadyEvent
import dev.kord.core.event.message.MessageCreateEvent
import website.rioru.projects.rioru.utils.interfaces.IListener

class RioruListener : IListener {
    override fun onReady(parameters: ReadyEvent) {
        println("${parameters.self.username} - Online")
    }
}