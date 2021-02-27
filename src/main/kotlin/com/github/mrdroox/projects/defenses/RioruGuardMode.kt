package com.github.mrdroox.projects.defenses

import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent

class RioruGuardMode(event: GuildMessageReceivedEvent) {
    init {
        if(!event.author.isBot && !event.isWebhookMessage && event.message.embeds.isNotEmpty()) {

        }
    }
}