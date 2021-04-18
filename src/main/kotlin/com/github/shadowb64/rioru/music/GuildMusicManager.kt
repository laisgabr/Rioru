package com.github.shadowb64.rioru.music

import com.sedmelluq.discord.lavaplayer.player.AudioPlayerManager

class GuildMusicManager(manager: AudioPlayerManager) {
    private var audioPlayer = manager.createPlayer()
    val scheduler = TrackScheduler(audioPlayer)
    val sendHandler = AudioPlayerSendHandler(audioPlayer)

    init {
        this.audioPlayer.addListener(scheduler)
    }
}