package com.riorucorp.projects.rioru.utils

import org.javacord.api.entity.channel.ChannelType
import org.javacord.api.entity.channel.TextChannel
import org.javacord.api.entity.message.MessageBuilder
import org.javacord.api.event.message.MessageCreateEvent
import javax.script.ScriptEngineManager

class Listener : IRioruListenerManager {
    override fun onMessageCreate(event: MessageCreateEvent?) {
        if (event!!.channel.type != ChannelType.SERVER_TEXT_CHANNEL) return
        val owners = listOf("730425354870587473", "807305370480934923")
        if (!owners.contains(event.messageAuthor.idAsString)) return
        if (event.messageContent.startsWith("r!!eval")) {
            try {
                val kotlinCode =
                    java.lang.String.join(" ", event.messageContent.split(" ")).replace("r!!eval", "")
                val engine = ScriptEngineManager().getEngineByName("kotlin")
                event.channel.sendMessage(MessageBuilder().append("${engine.eval(kotlinCode)}"))
            } catch (e: Exception) {
                event.channel.sendMessage(MessageBuilder().appendCode("kt", "${e.message}"))
            }
        }
    }
}

fun TextChannel.sendMessage(builder: MessageBuilder) {
    builder.send(this)
}