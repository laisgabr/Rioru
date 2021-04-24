package com.github.shadowb64.rioru.commands.vanilla.music

import com.github.shadowb64.rioru.managers.command.AbstractCommand
import com.github.shadowb64.rioru.managers.command.CommandCategory
import com.github.shadowb64.rioru.managers.command.CommandContext
import com.github.shadowb64.rioru.music.MusicManager

class SkipCommand: AbstractCommand(
    name = "skip",
    aliases = listOf("pular"),
    category = CommandCategory.MUSIC
) {
    override fun run(context: CommandContext) {
        if(!MusicManager.guildHasAPlayer(context.guild.idLong)) {
            return context.channel.sendMessage("").queue()
        }
    }
}