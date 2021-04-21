package com.github.shadowb64.rioru.music

import com.sedmelluq.discord.lavaplayer.player.AudioPlayer
import com.sedmelluq.discord.lavaplayer.player.event.AudioEventAdapter
import com.sedmelluq.discord.lavaplayer.track.AudioTrack
import com.sedmelluq.discord.lavaplayer.track.AudioTrackEndReason
import java.util.concurrent.BlockingQueue
import java.util.concurrent.LinkedBlockingQueue


class TrackScheduler(val player: AudioPlayer) : AudioEventAdapter() {
    val queue: BlockingQueue<AudioTrack>
    var repeating = false
    fun queue(track: AudioTrack) {
        if (!player.startTrack(track, true)) {
            queue.offer(track)
        }
    }

    fun nextTrack() = player.startTrack(queue.poll(), false)

    override fun onTrackEnd(player: AudioPlayer, track: AudioTrack, endReason: AudioTrackEndReason) {
        if (endReason.mayStartNext) {
            if (repeating) {
                this.player.startTrack(track.makeClone(), false)
                return
            }
            nextTrack()
        }
    }

    init {
        queue = LinkedBlockingQueue()
    }
}