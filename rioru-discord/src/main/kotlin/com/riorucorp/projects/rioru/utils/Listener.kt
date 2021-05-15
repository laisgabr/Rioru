package com.riorucorp.projects.rioru.utils

import com.riorucorp.projects.rioru.utilities.Logger
import org.javacord.api.DiscordApi
import org.javacord.api.entity.channel.ChannelType
import org.javacord.api.entity.message.MessageBuilder
import org.javacord.api.event.command.InteractionCreateEvent
import org.javacord.api.event.message.MessageCreateEvent
import javax.script.Invocable
import javax.script.ScriptEngineManager

class Listener : IRioruListenerManager {
    override fun onReady(event: DiscordApi) {
        Logger.info { "Rioru ready" }
        Logger.info { "Kotlin Version ${KotlinVersion.CURRENT}" }
    }

    override fun onInteractionCreate(event: InteractionCreateEvent?) {
        event!!.interaction.data.get().name
    }

    override fun onMessageCreate(event: MessageCreateEvent?) {
        if (event!!.channel.type != ChannelType.SERVER_TEXT_CHANNEL) return
        val owners = listOf("730425354870587473", "807305370480934923")
        if (!owners.contains(event.messageAuthor.idAsString)) return
        if (event.messageContent.startsWith("r!!eval")) {
            try {
                val kotlinCode =
                    java.lang.String.join(" ", event.messageContent.split(" ")).replace("r!!eval", "")

                val engine = ScriptEngineManager().getEngineByName("kotlin")
                MessageBuilder().append("${engine.eval(kotlinCode)}")
                    .send(event.channel)
            } catch (e: Exception) {
                MessageBuilder().append("${e.message}").send(event.channel)
            }
        }
    }
}