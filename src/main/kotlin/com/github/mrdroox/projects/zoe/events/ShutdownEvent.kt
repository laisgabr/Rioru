package com.github.mrdroox.projects.zoe.events

import com.github.mrdroox.projects.zoe.Config
import net.dv8tion.jda.api.events.ShutdownEvent
import net.dv8tion.jda.api.hooks.ListenerAdapter

class ShutdownEvent: ListenerAdapter() {
    override fun onShutdown(event: ShutdownEvent) {
        event.jda.getGuildChannelById(Config.get("generallog_channel"))
    }
}