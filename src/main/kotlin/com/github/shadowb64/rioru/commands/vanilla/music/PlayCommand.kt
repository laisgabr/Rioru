package com.github.shadowb64.rioru.commands.vanilla.music

import com.github.shadowb64.rioru.commands.AbstractCommand
import com.github.shadowb64.rioru.commands.CommandContext
import com.github.shadowb64.rioru.music.MusicManager
import java.net.URI
import java.net.URISyntaxException

class PlayCommand : AbstractCommand(
    name = "play",
    aliases = listOf("p")
) {
    override fun run(context: CommandContext) {
        if (!context.messageEvent.guild.selfMember.voiceState!!.inVoiceChannel()) context.messageEvent.guild.audioManager.openAudioConnection(
            context.messageEvent.member!!.voiceState!!.channel!!
        )

        if (context.args.isEmpty()) {
            context.messageEvent.channel.sendMessage(context.translate("MusicCommands:$name:argsIsEmpty")).queue()
            return
        }

        var track = java.lang.String.join(" ", context.args)
        if (!isUrl(track)) track = if (track.contains("soundcloud"))
            "soundcloud:$track"
        else "ytsearch:$track"

        MusicManager.registerSources()
        MusicManager.loadAndPlay(context.messageEvent.textChannel, track)
    }

    private fun isUrl(link: String) =
        try {
            URI(link)
            true
        } catch (e: URISyntaxException) {
            false
        }
}


