package com.github.mrdrooxbr.rioru.bot.events

import com.github.mrdrooxbr.rioru.utils.LoggerActivities

import net.dv8tion.jda.api.events.ReadyEvent
import net.dv8tion.jda.api.hooks.ListenerAdapter

class ClientReady: ListenerAdapter() {
    override fun onReady(event: ReadyEvent) {
        LoggerActivities.success("Rioru(${event.jda.selfUser.id}) started with success")
        LoggerActivities.info("Operation System: ${System.getProperty("os.name")}")
        LoggerActivities.info("========== Rioru Stats ==========")
        LoggerActivities.info("Guilds: ${event.guildTotalCount}")
        LoggerActivities.info("Users: ${event.jda.users.size}")
        LoggerActivities.info("================================")
    }
}