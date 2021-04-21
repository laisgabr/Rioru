package com.github.shadowb64.rioru.music

import com.sedmelluq.discord.lavaplayer.player.AudioLoadResultHandler
import com.sedmelluq.discord.lavaplayer.player.AudioPlayerManager
import com.sedmelluq.discord.lavaplayer.player.DefaultAudioPlayerManager
import com.sedmelluq.discord.lavaplayer.source.AudioSourceManagers
import com.sedmelluq.discord.lavaplayer.tools.FriendlyException
import com.sedmelluq.discord.lavaplayer.track.AudioPlaylist
import com.sedmelluq.discord.lavaplayer.track.AudioTrack
import net.dv8tion.jda.api.entities.Guild
import net.dv8tion.jda.api.entities.TextChannel

class MusicManager {
    companion object {
        private val audioPlayerManager: AudioPlayerManager = DefaultAudioPlayerManager()
        val musicManagers: HashMap<Long, GuildPlayerManager> = HashMap()

        fun registerSources() {
            AudioSourceManagers.registerRemoteSources(audioPlayerManager)
            AudioSourceManagers.registerLocalSource(audioPlayerManager)
        }

        fun getMusicManager(guild: Guild): GuildPlayerManager {
            return if (musicManagers.containsKey(guild.idLong)) {
                musicManagers[guild.idLong]!!
            } else {
                val guildManager = GuildPlayerManager(audioPlayerManager)
                musicManagers[guild.idLong] = guildManager
                guild.audioManager.sendingHandler = guildManager.sendHandler
                musicManagers[guild.idLong]!!
            }
        }

        fun loadAndPlay(channel: TextChannel, trackUrl: String?) {
            val musicManager = getMusicManager(channel.guild)
            audioPlayerManager.loadItem(trackUrl, object : AudioLoadResultHandler {
                override fun trackLoaded(track: AudioTrack) {
                    channel.sendMessage("Adicionando`")
                        .append(track.info.title).append("` na Lista de Reprodução")
                        .queue()
                    musicManager.scheduler.queue(track)
                }

                override fun playlistLoaded(playlist: AudioPlaylist) {
                    val tracks = playlist.tracks
                    for (track in tracks) {
                        channel.sendMessage("Adicionando`")
                            .append(track.info.title).append("` na Lista de Reprodução")
                            .queue()
                        musicManager.scheduler.queue(track)
                        break
                    }
                }

                override fun noMatches() {
                    //
                }

                override fun loadFailed(exception: FriendlyException) {
                    //
                }
            })
        }
    }
}