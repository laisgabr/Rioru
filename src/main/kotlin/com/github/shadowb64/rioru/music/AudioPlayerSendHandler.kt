package com.github.shadowb64.rioru.music

import com.sedmelluq.discord.lavaplayer.player.AudioPlayer
import com.sedmelluq.discord.lavaplayer.track.playback.MutableAudioFrame
import net.dv8tion.jda.api.audio.AudioSendHandler
import java.nio.ByteBuffer
import java.nio.ByteBuffer.allocate

class AudioPlayerSendHandler(private var audioPlayer: AudioPlayer) : AudioSendHandler {
    private var buffer = allocate(1024)
    private var frame = MutableAudioFrame()

    init {
        with(frame) { setBuffer(buffer) }
    }

    override fun canProvide() = this.audioPlayer.provide(frame)
    override fun provide20MsAudio(): ByteBuffer? = buffer.flip()
    override fun isOpus() = true
}