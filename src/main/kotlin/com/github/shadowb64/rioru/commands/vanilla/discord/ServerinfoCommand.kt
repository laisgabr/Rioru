package com.github.shadowb64.rioru.commands.vanilla.discord

import com.github.shadowb64.rioru.commands.RioruColor
import com.github.shadowb64.rioru.commands.RioruEmbedBuilder
import com.github.shadowb64.rioru.commands.caramel.AbstractCommand
import com.github.shadowb64.rioru.commands.caramel.CommandCategory
import com.github.shadowb64.rioru.commands.caramel.CommandContext

class ServerinfoCommand : AbstractCommand(
    name = "serverinfo",
    category = CommandCategory.DISCORD
) {
    override fun run(context: CommandContext) {
        val server = context.guild
        val embed = RioruEmbedBuilder(context, RioruColor.DEFAULT)
            .setTitle(server.name)
            .addField(context.translate("DiscordCommands:$name:embed:owner"), "${server.owner?.user?.asTag} `(${server.ownerId})`")
        context.channel.sendMessage(embed.build()).queue()
    }
}