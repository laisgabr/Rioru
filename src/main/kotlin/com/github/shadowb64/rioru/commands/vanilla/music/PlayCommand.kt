package com.github.shadowb64.rioru.commands.vanilla.music

import com.github.shadowb64.rioru.commands.caramel.AbstractCommand
import com.github.shadowb64.rioru.commands.caramel.CommandCategory
import com.github.shadowb64.rioru.commands.caramel.CommandContext
import com.github.shadowb64.rioru.commands.caramel.SlashCommandInfo
import com.github.shadowb64.rioru.music.MusicManager
import java.net.URI
import java.net.URISyntaxException

@SlashCommandInfo(
    name = "play",
    category = CommandCategory.MUSIC
)
class PlayCommand : AbstractCommand() {
    override fun run(context: CommandContext) {
        if (!context.guild?.selfMember?.voiceState!!.inVoiceChannel()) context.guild.audioManager.openAudioConnection(
            context.member!!.voiceState!!.channel!!
        )

        var track = context.message.getOption("search")!!.asString
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


