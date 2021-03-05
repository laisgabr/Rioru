package com.github.mrdrooxbr.rioru.bot.defenses

import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent

class RioruGuardMode(event: GuildMessageReceivedEvent) {
    init {
        if(!event.author.isBot && !event.isWebhookMessage && event.message.embeds.isNotEmpty()) {

        }
    }
}