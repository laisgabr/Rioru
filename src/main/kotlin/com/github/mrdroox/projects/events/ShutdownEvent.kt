package com.github.mrdroox.projects.events

import com.github.mrdroox.projects.utilities.others.LoggerActivities
import net.dv8tion.jda.api.events.ShutdownEvent
import net.dv8tion.jda.api.hooks.ListenerAdapter

class ShutdownEvent: ListenerAdapter() {
    override fun onShutdown(event: ShutdownEvent) {
        LoggerActivities.info("[ Shutdown Event ]  Shutting down......")
    }
}