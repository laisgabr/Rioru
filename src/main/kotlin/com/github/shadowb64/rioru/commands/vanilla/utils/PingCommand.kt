package com.github.shadowb64.rioru.commands.vanilla.utils

import com.github.shadowb64.rioru.commands.*

class PingCommand : AbstractCommand(
    name = "ping",
    aliases = listOf("latency", "latencia"),
    category = CommandCategory.UTILS
) {
    override fun run(context: CommandContext) {
        val time = System.currentTimeMillis()

        context.channel.sendMessage("\uD83C\uDFD3 | Pong").queue { res ->
            kotlin.run {
                val embed = RioruEmbedBuilder(context, RioruColor.DEFAULT)
                embed.setDescription(
                    "UtilsCommands:$name:embed:description",
                    mapOf(
                        "ApiPing" to context.jda.gatewayPing.toString(),
                        "Ping" to (System.currentTimeMillis() - time).toString(),
                    )
                )
                res.editMessage(embed.build()).queue()
            }
        }
        return
    }
}