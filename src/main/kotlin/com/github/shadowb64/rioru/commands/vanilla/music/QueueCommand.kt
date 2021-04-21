package com.github.shadowb64.rioru.commands.vanilla.music

import com.github.shadowb64.rioru.commands.AbstractCommand
import com.github.shadowb64.rioru.commands.CommandContext
import com.github.shadowb64.rioru.music.MusicManager

class QueueCommand: AbstractCommand(
    name = "queue"
) {
    override fun run(context: CommandContext) {
        if(MusicManager.getMusicManager(context.messageEvent.guild).scheduler.queue === null) {
            context.messageEvent.channel.sendMessage("nulo").queue()
            return
        }

        context.messageEvent.channel.sendMessage(MusicManager.getMusicManager(context.messageEvent.guild).scheduler.queue.size.toString()).queue()
    }
}