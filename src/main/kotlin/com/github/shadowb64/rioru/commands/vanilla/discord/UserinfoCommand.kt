package com.github.shadowb64.rioru.commands.vanilla.discord

import com.github.shadowb64.rioru.commands.*
import net.dv8tion.jda.api.entities.User

class UserinfoCommand : AbstractCommand(
    name = "userinfo",
    aliases = listOf("ui"),
    category = CommandCategory.DISCORD
) {
    override fun run(context: CommandContext) {
        val user = context.getUser()
        if (user === null) {
            val arg: String = if (context.args[0].length > 50) context.args[0].substring(0, 50) + "..."
            else context.args[0]
            context.messageEvent.channel.sendMessage(context.translate(
                "DiscordCommands:comuns:userNotFound",
                mapOf("ARG" to arg.replace(Regex("(`)"), ""))
            )).queue()
            return
        }

        val embed = RioruEmbedBuilder(context, RioruColor.DEFAULT)
            .setTitle(context.translate("teste"))
        context.messageEvent.channel.sendMessage(embed.build()).queue()
    }
}