package com.riorucorp.projects.rioru.music

import com.sedmelluq.discord.lavaplayer.player.AudioPlayer
import com.sedmelluq.discord.lavaplayer.track.playback.AudioFrame
import org.javacord.api.DiscordApi
import org.javacord.api.audio.AudioSource
import org.javacord.api.audio.AudioSourceBase

class RioruAudioSource(rioruInstance: DiscordApi, val audioPlayer: AudioPlayer): AudioSourceBase(rioruInstance) {
    private val lastFrame: AudioFrame = audioPlayer.provide()
    override fun getNextFrame(): ByteArray? = applyTransformers(lastFrame.data)
    override fun hasNextFrame(): Boolean = lastFrame != null
    override fun hasFinished(): Boolean = false
    override fun copy(): AudioSource = RioruAudioSource(api, audioPlayer)
}