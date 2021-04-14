package com.github.shadowb64.rioru.utilities

import net.dv8tion.jda.api.entities.ChannelType
import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent
import net.dv8tion.jda.api.hooks.ListenerAdapter

class JDAEventsListener: ListenerAdapter() {
    override fun onGuildMessageReceived(event: GuildMessageReceivedEvent) {
        if(event.channel.type !== ChannelType.TEXT) return

    }
}