package com.riorucorp.projects.rioru.music

import com.sedmelluq.discord.lavaplayer.player.DefaultAudioPlayerManager
import com.sedmelluq.discord.lavaplayer.source.bandcamp.BandcampAudioSourceManager
import com.sedmelluq.discord.lavaplayer.source.http.HttpAudioSourceManager
import com.sedmelluq.discord.lavaplayer.source.local.LocalAudioSourceManager
import com.sedmelluq.discord.lavaplayer.source.soundcloud.SoundCloudAudioSourceManager
import com.sedmelluq.discord.lavaplayer.source.twitch.TwitchStreamAudioSourceManager
import com.sedmelluq.discord.lavaplayer.source.vimeo.VimeoAudioSourceManager
import com.sedmelluq.discord.lavaplayer.source.youtube.YoutubeAudioSourceManager

object RioruPlayerManager {
    val playerManager = DefaultAudioPlayerManager()
    fun register() {
        playerManager.registerSourceManager(YoutubeAudioSourceManager(true))
        playerManager.registerSourceManager(TwitchStreamAudioSourceManager())
        playerManager.registerSourceManager(BandcampAudioSourceManager())
        playerManager.registerSourceManager(VimeoAudioSourceManager())
        playerManager.registerSourceManager(SoundCloudAudioSourceManager.createDefault())
        playerManager.registerSourceManager(HttpAudioSourceManager())
        playerManager.registerSourceManager(LocalAudioSourceManager())
    }
}
