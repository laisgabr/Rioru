package com.github.mrdroox.projects.utilities

import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent

class CommandOptions(command: Command, AuthorID: String, event: GuildMessageReceivedEvent) {
    init {
        if(command.category === CommandCategory.DEVELOPER) {
            event.channel.sendMessage("Você não faz parte da minha equipe").queue()
        }

    }
}