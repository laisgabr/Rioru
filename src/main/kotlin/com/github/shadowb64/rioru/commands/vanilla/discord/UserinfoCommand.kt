package com.github.shadowb64.rioru.commands.vanilla.discord

import com.github.shadowb64.rioru.commands.*

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
            context.channel.sendMessage(context.translate(
                "DiscordCommands:comuns:userNotFound",
                mapOf("ARG" to arg.replace(Regex("(`)"), ""))
            )).queue()
            return
        }

        val embed = RioruEmbedBuilder(context, RioruColor.DEFAULT)
            .setTitle(user.asTag)
            .addField("Nome", "```${user.name}```", true)
            .addField("ID", "```${user.id}```", true)
            .addField("Conta criada em", context.formatTime(user.timeCreated))
        context.channel.sendMessage(embed.build()).queue()
    }
}