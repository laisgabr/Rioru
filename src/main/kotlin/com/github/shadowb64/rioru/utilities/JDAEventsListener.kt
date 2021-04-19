package com.github.shadowb64.rioru.utilities

import com.github.shadowb64.rioru.commands.CommandContext
import com.github.shadowb64.rioru.commands.CommandOptions
import com.github.shadowb64.rioru.managers.CommandManager
import net.dv8tion.jda.api.entities.ChannelType
import net.dv8tion.jda.api.events.message.MessageReceivedEvent
import net.dv8tion.jda.api.hooks.ListenerAdapter

class JDAEventsListener : ListenerAdapter() {
    override fun onMessageReceived(event: MessageReceivedEvent) {
        if (event.channel.type !== ChannelType.TEXT) return
        if (!event.message.contentRaw.startsWith("r!!")) return

        var args = event.message.contentRaw.trim().split(" ").toMutableList()
        args[0] = args[0].replace("r!!", "")

        val cmd = CommandManager.getCommand(args[0])
        args = args.subList(1, args.size)
        if (cmd !== null) {
            try {
                val context = CommandContext(event, args, "pt-BR")
                CommandOptions(context, cmd)
                cmd.run(context)
            } catch (e: Exception) {
                event.channel.sendMessage(":x: Aconteceu um erro `${e.message}`").queue()
            }
        }
    }
}