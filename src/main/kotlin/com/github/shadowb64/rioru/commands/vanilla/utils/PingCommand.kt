package com.github.shadowb64.rioru.commands.vanilla.utils

import com.github.shadowb64.rioru.commands.RioruColor
import com.github.shadowb64.rioru.commands.RioruEmbedBuilder
import com.github.shadowb64.rioru.commands.caramel.AbstractCommand
import com.github.shadowb64.rioru.commands.caramel.CommandCategory
import com.github.shadowb64.rioru.commands.caramel.CommandContext
import com.github.shadowb64.rioru.commands.caramel.SlashCommandInfo

@SlashCommandInfo(
    name = "ping",
    category = CommandCategory.UTILS
)
class PingCommand : AbstractCommand() {
    override fun run(context: CommandContext) {
        val time = System.currentTimeMillis()

        context.sendMessage("\uD83C\uDFD3 | Pong").queue { res ->
            kotlin.run {
                val embed = RioruEmbedBuilder(context, RioruColor.DEFAULT)
                embed.setDescription(
                    "UtilsCommands:$name:embed:description",
                    mapOf(
                        "ApiPing" to context.jda.gatewayPing,
                        "Ping" to System.currentTimeMillis() - time,
                    )
                )

                res.editOriginal(embed.build()).queue()
            }
        }
        return
    }
}