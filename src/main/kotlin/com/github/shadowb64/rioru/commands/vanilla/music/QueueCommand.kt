package com.github.shadowb64.rioru.commands.vanilla.music

import com.github.shadowb64.rioru.commands.AbstractCommand
import com.github.shadowb64.rioru.commands.CommandContext
import com.github.shadowb64.rioru.commands.RioruColor
import com.github.shadowb64.rioru.commands.RioruEmbedBuilder
import com.github.shadowb64.rioru.music.MusicManager

class QueueCommand : AbstractCommand(
    name = "queue"
) {
    override fun run(context: CommandContext) {
        val queue = MusicManager.getMusicManager(context.messageEvent.guild).scheduler.queue
        val embed = RioruEmbedBuilder(context, RioruColor.MUSIC)
        if (queue.size < 10) {
            embed.setTitle("Lista de Reprodução")
            embed.setDescription(queue.map { audioTrack ->
                "**${audioTrack.info.title}** ${context.formatMilliseconds(audioTrack.duration)}"
            }.toString())
            return context.messageEvent.channel.sendMessage(embed.build()).queue()
        }
    }
}