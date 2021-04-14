package com.github.shadowb64.rioru.commands.vanilla.utils

import com.github.shadowb64.rioru.commands.*

class PingCommand: AbstractCommand(
    name = "ping",
    aliases = listOf("latency", "latencia"),
    category = CommandCategory.UTILS
) {
    override fun run(context: CommandContext) {
        val time = System.currentTimeMillis()
        if(context.args.isEmpty()) {
            context.messageEvent.channel.sendMessage("...").queue { res ->
                kotlin.run {
                    val embed = RioruEmbedBuilder(context, RioruColor.DEFAULT)
                    embed.setDescription("UtilsCommands:$name:embed:description", mapOf(
                        "ApiPing" to context.messageEvent.jda.gatewayPing.toString(),
                        "Ping" to (time - System.currentTimeMillis()).toString()
                    ))
                    embed.setThumbnail(context.messageEvent.jda.selfUser.effectiveAvatarUrl)
                    res.editMessage(embed.build()).queue()
                }
            }
            return
        }
    }
}