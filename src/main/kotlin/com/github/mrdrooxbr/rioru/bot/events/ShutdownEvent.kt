package com.github.mrdrooxbr.rioru.bot.events

import com.github.mrdrooxbr.rioru.utils.LoggerActivities
import net.dv8tion.jda.api.events.ShutdownEvent
import net.dv8tion.jda.api.hooks.ListenerAdapter

class ShutdownEvent: ListenerAdapter() {
    override fun onShutdown(event: ShutdownEvent) {
        LoggerActivities.info("[ Shutdown Event ]  Shutting down......\n Finish code: \"${event.code}\"")
    }
}