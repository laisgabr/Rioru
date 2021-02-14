package com.github.mrdroox.projects.zoe.events

import com.github.mrdroox.projects.zoe.controllers.CommandManager

import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent
import net.dv8tion.jda.api.hooks.ListenerAdapter

class MessageCreateEvent: ListenerAdapter() {
    override fun onGuildMessageReceived(event: GuildMessageReceivedEvent) {
        if(event.author.isBot || event.isWebhookMessage) return;

        if (event.message.contentRaw.startsWith("test!")) {
            CommandManager.handle(event)
        }
    }
}