package com.github.mrdrooxbr.rioru.bot.commands

import com.github.mrdrooxbr.rioru.bot.structures.commands.Command
import com.github.mrdrooxbr.rioru.bot.structures.commands.enumerator.CommandCategory
import com.github.mrdrooxbr.rioru.bot.structures.commands.CommandContext
import com.github.mrdrooxbr.rioru.bot.rioruUtils.RioruEmbed

class PingCommand: Command() {
    override var name: String? = "ping"
    override var aliases = listOf("latency", "latencia")
    override var category = CommandCategory.UTILITIES
    override var canDisable = false

    override fun execute(ctx: CommandContext) {
        val time = System.currentTimeMillis()
        ctx.getChannel().sendMessage("Ping?").queue { response ->
            run {
                response.editMessage(
                    RioruEmbed(ctx.getAuthor(), "pt-BR")
                        .setThumbnail(ctx.getJDA().selfUser.effectiveAvatarUrl)
                        .setDescription("Ping: ${System.currentTimeMillis() - time} ms\n" +
                                "Gateway Ping: ${ctx.getJDA().gatewayPing} ms")
                    .build()
                ).queue()
            }
        }
    }
}