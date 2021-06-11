package com.riorucorp.projects.rioru.utils

import com.riorucorp.projects.rioru.utilities.Logger
import net.dv8tion.jda.api.events.ReadyEvent
import net.dv8tion.jda.api.hooks.ListenerAdapter

class Listener : ListenerAdapter() {
    override fun onReady(event: ReadyEvent) {
        Logger.info { "Rioru is now ready with ${event.jda.shardManager?.shards?.size} Shards" }

    }

}
