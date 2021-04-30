package com.github.shadowb64.rioru.commands.vanilla.music

import com.github.shadowb64.rioru.commands.caramel.AbstractCommand
import com.github.shadowb64.rioru.commands.caramel.CommandContext
import com.github.shadowb64.rioru.music.MusicManager
import java.net.URI
import java.net.URISyntaxException

class PlayCommand : AbstractCommand(
    name = "play",
    aliases = listOf("p", "tocar")
) {
    override fun run(context: CommandContext) {
        if (!context.guild.selfMember.voiceState!!.inVoiceChannel()) context.guild.audioManager.openAudioConnection(
            context.member!!.voiceState!!.channel!!
        )

        if (context.args.isEmpty())
            return context.channel.sendMessage(context.translate("MusicCommands:$name:argsIsEmpty")).queue()


        var track = java.lang.String.join(" ", context.args)
        if (!isUrl(track)) track = if (track.contains("soundcloud"))
            "soundcloud:$track"
        else "ytsearch:$track"

        MusicManager.registerSources()
        MusicManager.loadAndPlay(context.textChannel, track)
    }

    private fun isUrl(link: String) =
        try {
            URI(link)
            true
        } catch (e: URISyntaxException) {
            false
        }
}


