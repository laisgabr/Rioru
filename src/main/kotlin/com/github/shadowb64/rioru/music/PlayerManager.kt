package com.github.shadowb64.rioru.music

import com.github.shadowb64.rioru.commands.CommandContext
import com.sedmelluq.discord.lavaplayer.player.AudioLoadResultHandler
import com.sedmelluq.discord.lavaplayer.player.AudioPlayerManager
import com.sedmelluq.discord.lavaplayer.player.DefaultAudioPlayerManager
import com.sedmelluq.discord.lavaplayer.source.AudioSourceManagers
import com.sedmelluq.discord.lavaplayer.tools.FriendlyException
import com.sedmelluq.discord.lavaplayer.track.AudioPlaylist
import com.sedmelluq.discord.lavaplayer.track.AudioTrack
import net.dv8tion.jda.api.entities.Guild
import java.net.URI
import java.net.URISyntaxException
import java.util.*

class PlayerManager {
    private val musicManagers: MutableMap<Long, GuildMusicManager>
    private val audioPlayerManager: AudioPlayerManager

    @Suppress("MemberVisibilityCanBePrivate")
    fun getMusicManager(guild: Guild): GuildMusicManager {
        return musicManagers.computeIfAbsent(guild.idLong) {
            val guildMusicManager = GuildMusicManager(audioPlayerManager)
            guild.audioManager.sendingHandler = guildMusicManager.sendHandler
            guildMusicManager
        }
    }

    fun loadAndPlay(context: CommandContext, trackUrl: String) {
        val musicManager = getMusicManager(context.messageEvent.guild)
        musicManager.scheduler.channel = context.messageEvent.channel
        audioPlayerManager.loadItemOrdered(musicManager, trackUrl, object : AudioLoadResultHandler {
            override fun trackLoaded(track: AudioTrack) {
                context.messageEvent.channel.sendMessage("Adicionando ${track.info.title} na Lista de Reprodução")
                    .queue()
                musicManager.scheduler.queue(track)
            }

            override fun playlistLoaded(playlist: AudioPlaylist) {
                val tracks = playlist.tracks
                if (!isURL(trackUrl)) {
                    trackLoaded(playlist.tracks.first()); return
                }

                context.messageEvent.channel.sendMessage("Adicionando ${tracks.size} músicas da Playlist `${playlist.name}` `")
                    .queue()
                for (trackPlaylist in tracks) musicManager.scheduler.queue(trackPlaylist)
            }

            override fun noMatches() =
                context.messageEvent.channel.sendMessage("Não encontrei nenhum resultado referente a `${trackUrl}`")
                    .queue()

            override fun loadFailed(exception: FriendlyException) =
                context.messageEvent.channel.sendMessage("Aconteceu um Erro `${exception.message}`").queue()
        })
    }

    companion object {
        private var INSTANCE: PlayerManager? = null
        val instance: PlayerManager?
            get() {
                if (INSTANCE === null) INSTANCE = PlayerManager()
                return INSTANCE
            }
    }

    init {
        musicManagers = HashMap()
        audioPlayerManager = DefaultAudioPlayerManager()
        AudioSourceManagers.registerRemoteSources(audioPlayerManager)
        AudioSourceManagers.registerLocalSource(audioPlayerManager)
    }

    fun isURL(uri: String): Boolean =
        try {
            URI(uri)
            true
        } catch (e: URISyntaxException) {
            false
        }
}