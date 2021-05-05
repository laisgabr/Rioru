package com.github.shadowb64.rioru.utilities

import com.github.shadowb64.rioru.commands.slash.CommandContext
import com.github.shadowb64.rioru.managers.command.CommandManager
import net.dv8tion.jda.api.entities.ChannelType
import net.dv8tion.jda.api.events.ReadyEvent
import net.dv8tion.jda.api.events.interaction.SlashCommandEvent
import net.dv8tion.jda.api.hooks.ListenerAdapter

class JDAEventsListener : ListenerAdapter() {
    override fun onSlashCommand(event: SlashCommandEvent) {
        if(event.channel.type == ChannelType.PRIVATE) return event.reply("You can use the Slash Commands only in guilds").queue()
        val ctx = CommandContext(event, "pt-BR")
        CommandManager.Slash.getSlashCommandByName(event.name)?.run(ctx)

    }

    override fun onReady(event: ReadyEvent) {
        Logger.info { "Rioru online with success" }
    }
}