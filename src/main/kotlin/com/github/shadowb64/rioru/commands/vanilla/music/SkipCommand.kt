package com.github.shadowb64.rioru.commands.vanilla.music

import com.github.shadowb64.rioru.commands.AbstractCommand
import com.github.shadowb64.rioru.commands.CommandContext
import com.github.shadowb64.rioru.music.PlayerManager

class SkipCommand : AbstractCommand(
    name = "skip",
    aliases = listOf("pular")
) {
    override fun run(context: CommandContext) {
        val scheduler = PlayerManager.instance?.getMusicManager(context.messageEvent.guild)?.scheduler
        scheduler?.player?.stopTrack()
        scheduler?.queue?.remove(scheduler.player.playingTrack)
        scheduler?.player?.playTrack(scheduler.queue.first())
    }
}