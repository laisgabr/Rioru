package com.github.shadowb64.rioru.commands.vanilla.discord

import com.github.shadowb64.rioru.commands.*

class ChannelinfoCommand : AbstractCommand(
    name = "channelinfo",
    aliases = listOf("infochannel"),
    category = CommandCategory.DISCORD
) {
    override fun run(context: CommandContext) {
        val embed = RioruEmbedBuilder(context, RioruColor.DEFAULT)
            .setDescription(context.messageEvent.textChannel.topic ?: "Nada")
        .addField("Nome", context.messageEvent.channel.name, true)
            .addField("ID", context.messageEvent.channel.id, true)
        context.messageEvent.channel.sendMessage(embed.build()).queue()
    }
}
