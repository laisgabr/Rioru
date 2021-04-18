package com.github.shadowb64.rioru.commands.vanilla.music

import com.github.shadowb64.rioru.commands.AbstractCommand
import com.github.shadowb64.rioru.commands.CommandContext
import com.github.shadowb64.rioru.music.PlayerManager

class DisconnectCommand: AbstractCommand(
    name = "disconnect",
    aliases = listOf("leave"),
    verifyIfVoiceChannel = true,
    verifyIfBotVoiceChannel = true,
    verifySameChannel = true
) {
    override fun run(context: CommandContext) {
        PlayerManager.instance!!.getMusicManager(context.messageEvent.guild).scheduler.player.destroy()
    }
}