package com.github.shadowb64.rioru.music

import com.sedmelluq.discord.lavaplayer.player.AudioPlayer
import com.sedmelluq.discord.lavaplayer.player.AudioPlayerManager

class GuildPlayerManager(manager: AudioPlayerManager) {
    val audioPlayer: AudioPlayer = manager.createPlayer()
    val scheduler: TrackScheduler = TrackScheduler(audioPlayer)
    val sendHandler: AudioPlayerSendHandler = AudioPlayerSendHandler(audioPlayer)

    init {
        audioPlayer.addListener(scheduler)
    }
}