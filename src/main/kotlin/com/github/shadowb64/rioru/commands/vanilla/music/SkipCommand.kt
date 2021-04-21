package com.github.shadowb64.rioru.commands.vanilla.music

import com.github.shadowb64.rioru.commands.AbstractCommand
import com.github.shadowb64.rioru.commands.CommandContext
import com.github.shadowb64.rioru.music.MusicManager

class SkipCommand: AbstractCommand(
    name = "skip"
) {
    override fun run(context: CommandContext) {
        if(!MusicManager.guildHasAPlayer(context.messageEvent.guild.idLong)) {
            return context.messageEvent.channel.sendMessage("").queue()
        }
    }
}