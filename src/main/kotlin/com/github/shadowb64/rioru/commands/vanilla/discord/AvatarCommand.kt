package com.github.shadowb64.rioru.commands.vanilla.discord

import com.github.shadowb64.rioru.commands.RioruColor
import com.github.shadowb64.rioru.commands.RioruEmbedBuilder
import com.github.shadowb64.rioru.commands.caramel.AbstractCommand
import com.github.shadowb64.rioru.commands.caramel.CommandCategory
import com.github.shadowb64.rioru.commands.caramel.CommandContext
import com.github.shadowb64.rioru.commands.caramel.SlashCommandInfo

@SlashCommandInfo(
    name = "avatar",
    category = CommandCategory.DISCORD
)
class AvatarCommand : AbstractCommand() {
    override fun run(context: CommandContext) {
        val us = context.message.getOption("user")
        if (us == null) {
            context.sendMessage(
                context.translate(
                    "ClassicMessages:userNotFound",
                    mapOf("arg" to context.message.getOption("user")!!.asString)
                )
            ).queue()
            return
        }

        val user = us.asUser
        val embed = RioruEmbedBuilder(context, RioruColor.DEFAULT)
            .setTitle(
                context.translate(
                    "DiscordCommands:$name:embed:userAv",
                    mapOf("uTAG" to user.asTag)
                )
            )
            .setDescription(
                context.translate(
                    "DiscordCommands:$name:embed:downloadNow",
                    mapOf("userAvURL" to user.effectiveAvatarUrl)
                )
            )
            .setImage("${user.effectiveAvatarUrl}?size=4096")
        context.channel.sendMessage(embed.build()).queue()
    }
}