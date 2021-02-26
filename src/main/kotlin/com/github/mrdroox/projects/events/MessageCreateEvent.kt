package com.github.mrdroox.projects.events

import com.github.mrdroox.projects.controllers.CommandManager
import com.github.mrdroox.projects.utilities.commands.CommandContext

import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent
import net.dv8tion.jda.api.hooks.ListenerAdapter

class MessageCreateEvent: ListenerAdapter() {
    override fun onGuildMessageReceived(event: GuildMessageReceivedEvent) {
        if(event.author.isBot || event.isWebhookMessage) return
        val prefix = "test!"
        if (event.message.contentRaw.startsWith(prefix)) {
            val args = event.message.contentRaw.trim().split(" ")

            val command = args[0].replace(prefix, "").toLowerCase()
            val cmd = CommandManager.getCommand(command)

            if (cmd !== null)
                try {
                    cmd[0].execute(CommandContext(event, args.subList(1, args.size), "pt-BR"))
                } catch(e: Exception) {
                    event.channel.sendMessage("Have any error, `${e.message}`").queue()
                }
            else
                event.channel.sendMessage(":x: | O comando `" + args[0].replace(prefix, "") + "` não existe").queue()
        }
    }
}