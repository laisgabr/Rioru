package com.github.shadowb64.rioru.commands.vanilla.discord

import com.github.shadowb64.rioru.commands.*

class AvatarCommand : AbstractCommand(
    name = "avatar",
    aliases = listOf("user-icon", "av", "a"),
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
            .setTitle(context.translate(
                "DiscordCommands:avatar:embed:userAv",
                mapOf("uTAG" to user.asTag)
            ))
            .setDescription(context.translate(
                "DiscordCommands:avatar:embed:downloadNow",
                mapOf("userAvURL" to user.effectiveAvatarUrl)
            ))
            .setImage("${user.effectiveAvatarUrl}?size=4096")
        context.channel.sendMessage(embed.build()).queue()
    }
}