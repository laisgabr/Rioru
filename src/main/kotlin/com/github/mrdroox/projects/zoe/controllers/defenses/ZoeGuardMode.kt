package com.github.mrdroox.projects.zoe.controllers.defenses

import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent

class ZoeGuardMode(event: GuildMessageReceivedEvent) {
    init {
        if(!event.author.isBot && !event.isWebhookMessage && event.message.embeds.isNotEmpty()) {

        }
    }
}