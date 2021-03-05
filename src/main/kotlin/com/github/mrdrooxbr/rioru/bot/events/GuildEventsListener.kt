package com.github.mrdrooxbr.rioru.bot.events

import net.dv8tion.jda.api.events.guild.GuildJoinEvent
import net.dv8tion.jda.api.events.guild.GuildLeaveEvent
import net.dv8tion.jda.api.events.message.guild.GuildMessageEmbedEvent
import net.dv8tion.jda.api.hooks.ListenerAdapter

class GuildEventsListener: ListenerAdapter() {
    override fun onGuildJoin(event: GuildJoinEvent) {

    }

    override fun onGuildLeave(event: GuildLeaveEvent) {

    }

    override fun onGuildMessageEmbed(event: GuildMessageEmbedEvent) =
        event.channel.retrieveMessageById(event.messageId).queue { res ->
            kotlin.run {
                if(!res.author.isBot) {
                    // BANIR O SAFADO Q USA SELFBOT :)
                   if(event.messageEmbeds.isNotEmpty()) {

                   }


                }
            }
        }
}