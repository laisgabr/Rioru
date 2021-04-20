package com.github.shadowb64.rioru.commands.vanilla.music

import com.github.shadowb64.rioru.commands.AbstractCommand
import com.github.shadowb64.rioru.commands.CommandContext
import com.github.shadowb64.rioru.music.PlayerManager

class QueueCommand : AbstractCommand(
    name = "queue",
    aliases = listOf("fila")
) {
    override fun run(context: CommandContext) {
        context.messageEvent.channel.sendMessage(PlayerManager.instance?.getMusicManager(context.messageEvent.guild)?.scheduler?.queue?.size.toString()).queue()
    }
}