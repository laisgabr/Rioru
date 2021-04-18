@file:Suppress("MemberVisibilityCanBePrivate")

package com.github.shadowb64.rioru.music

import com.sedmelluq.discord.lavaplayer.player.AudioPlayer
import com.sedmelluq.discord.lavaplayer.player.event.AudioEventAdapter
import com.sedmelluq.discord.lavaplayer.track.AudioTrack
import com.sedmelluq.discord.lavaplayer.track.AudioTrackEndReason
import net.dv8tion.jda.api.entities.MessageChannel
import java.util.concurrent.BlockingQueue
import java.util.concurrent.LinkedBlockingQueue

class TrackScheduler(val player: AudioPlayer) : AudioEventAdapter() {
    val queue: BlockingQueue<AudioTrack>
    var repeatingTrack = false
    lateinit var channel: MessageChannel
    fun queue(track: AudioTrack) {
        if (!player.startTrack(track, true)) {
            queue.offer(track)
        }
    }

    fun nextTrack() = player.startTrack(queue.poll(), true)

    override fun onTrackEnd(player: AudioPlayer, track: AudioTrack, endReason: AudioTrackEndReason) {
        if (endReason.mayStartNext) {
            if (repeatingTrack) {
                this.player.startTrack(track.makeClone(), true)
                return
            }

            nextTrack()
        }
    }

    override fun onTrackStart(player: AudioPlayer?, track: AudioTrack?) {
        channel.sendMessage("Tocando agora `${track?.info?.title}`").queue()
    }

    init {
        queue = LinkedBlockingQueue()
    }
}