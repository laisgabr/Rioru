package com.github.mrdroox.projects.zoe.events

import net.dv8tion.jda.api.events.message.guild.GuildMessageDeleteEvent
import net.dv8tion.jda.api.hooks.ListenerAdapter

class MessageDeletedEvent: ListenerAdapter() {
    override fun onGuildMessageDelete(event: GuildMessageDeleteEvent) {

    }
}