package com.riorucorp.projects.rioru.music

import com.sedmelluq.discord.lavaplayer.player.AudioPlayer
import com.sedmelluq.discord.lavaplayer.player.event.AudioEventAdapter
import com.sedmelluq.discord.lavaplayer.track.AudioTrack
import com.sedmelluq.discord.lavaplayer.track.AudioTrackEndReason
import java.util.concurrent.BlockingQueue
import java.util.concurrent.LinkedBlockingQueue


class TrackScheduler(val player: AudioPlayer): AudioEventAdapter() {
    var queue: BlockingQueue<AudioTrack> = LinkedBlockingQueue()
    fun queue(track: AudioTrack) {
        if (!player.startTrack(track, false)) {
            queue.offer(track)
        }
    }

    fun nextTrack() {
        player.startTrack(queue.poll(), true)
    }

    override fun onTrackEnd(player: AudioPlayer?, track: AudioTrack?, endReason: AudioTrackEndReason) {
        if (endReason.mayStartNext) {
            nextTrack()
        }
    }
}