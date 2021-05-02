package com.github.shadowb64.rioru.commands.vanilla.music

import com.github.shadowb64.rioru.commands.caramel.AbstractCommand
import com.github.shadowb64.rioru.commands.caramel.CommandCategory
import com.github.shadowb64.rioru.commands.caramel.CommandContext
import com.github.shadowb64.rioru.music.MusicManager

class SkipCommand : AbstractCommand(
    name = "skip",
    aliases = listOf("pular"),
    category = CommandCategory.MUSIC
) {
    override fun run(context: CommandContext) {
        if (!MusicManager.guildHasAPlayer(context.guild.idLong))
            return context.channel.sendMessage(context.translate("MusicCommands:$name:notHasAPlayer")).queue()

        MusicManager.getMusicManager(context.guild).scheduler.nextTrack()
    }
}