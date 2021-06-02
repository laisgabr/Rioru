package com.riorucorp.projects.rioru.music

import com.sedmelluq.discord.lavaplayer.player.AudioPlayer
import com.sedmelluq.discord.lavaplayer.player.AudioPlayerManager

class RioruGuildManager(manager: AudioPlayerManager) {
    val player: AudioPlayer = manager.createPlayer()
    val scheduler = TrackScheduler(player)

    init {
        player.addListener(scheduler)
    }

    companion object {
        val managers = LinkedHashMap<String, RioruGuildManager>()
        fun exists(id: String): Boolean = managers.containsKey(id)
        fun getManager(id: String): RioruGuildManager {
            if(!managers.containsKey(id)) managers[id] = RioruGuildManager(RioruPlayerManager.playerManager)
            return managers[id]!!
        }
    }
}