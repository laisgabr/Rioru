package com.github.mrdroox.projects.events

import com.github.mrdroox.projects.controllers.CommandManager

import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent
import net.dv8tion.jda.api.hooks.ListenerAdapter

class MessageCreateEvent: ListenerAdapter() {
    override fun onGuildMessageReceived(event: GuildMessageReceivedEvent) {
        if(event.author.isBot || event.isWebhookMessage) return

        if (event.message.contentRaw.startsWith("test!")) {
            event.channel.sendMessage("Grr, sa merda").queue()
            CommandManager.handle(event)
        }
    }
}