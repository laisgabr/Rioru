package com.github.shadowb64.rioru.commands.vanilla.music

import com.github.shadowb64.rioru.commands.AbstractCommand
import com.github.shadowb64.rioru.commands.CommandContext

class JoinCommand : AbstractCommand(
    name = "join",
    verifyIfVoiceChannel = true,
    verifyBotAlreadyInVoiceChannel = true
) {
    override fun run(context: CommandContext) {
        val memberChannel = context.messageEvent.member!!.voiceState!!.channel!!
        context.messageEvent.guild.audioManager.openAudioConnection(memberChannel)
        context.messageEvent.channel.sendMessage(
            context.translate(
                "MusicCommands:$name:connectedInChannel",
                mapOf("CHANNELNAME" to memberChannel.name)
            )
        ).queue()
    }
}