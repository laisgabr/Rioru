package com.github.mrdrooxbr.rioru.bot.events

import com.github.mrdrooxbr.rioru.bot.managers.CommandManager
import com.github.mrdrooxbr.rioru.bot.commands.framework.CommandContext
import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent
import net.dv8tion.jda.api.hooks.ListenerAdapter

class MessageCreateEvent: ListenerAdapter() {
    override fun onGuildMessageReceived(event: GuildMessageReceivedEvent) {
        if(event.author.isBot || event.isWebhookMessage) return
        val prefix = "test!"

        if (event.message.contentRaw === prefix) return
        if (event.message.contentRaw.startsWith(prefix)) {
            if(!event.channel.canTalk()) {
                event.author.openPrivateChannel().queue {
                    res ->
                    run {
                        res.sendMessage("Eu não tenho permissão para Enviar Mensagens no Canal ${event.channel.asMention}").queue()
                    }
                }
            }
            val args = event.message.contentRaw.trim().split(" ")

            val command = args[0].replace(prefix, "").toLowerCase()
            val cmd = CommandManager.getCommand(command)

            if (cmd !== null)
                try {
                    val ctx = CommandContext(event, args.subList(1, args.size), "pt-BR")
                    cmd[0].execute(ctx)
                } catch(e: Exception) {
                    event.channel.sendMessage("Have any error, `${e.message}`").queue()
                }
            else
                event.channel.sendMessage(":x: | O comando `" + args[0].replace(prefix, "") + "` não existe").queue()
        }
    }
}
