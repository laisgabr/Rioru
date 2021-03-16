package com.github.mrdrooxbr.rioru.bot.commands.impl

import com.github.mrdrooxbr.rioru.bot.commands.framework.CommandContext
import com.github.mrdrooxbr.rioru.bot.commands.framework.rioru.RioruEmbed
import com.github.mrdrooxbr.rioru.bot.commands.framework.Command
import com.github.mrdrooxbr.rioru.bot.commands.framework.CommandCategory
import com.github.mrdrooxbr.rioru.bot.commands.framework.CommandInfo

@CommandInfo(
    name = "ping",
    aliases = ["latency", "latencia"],
    category = CommandCategory.UTILITIES,
    cooldown = 5
)
class PingCommand: Command() {
    override fun execute(ctx: CommandContext) {
        val time = System.currentTimeMillis()
        ctx.getChannel().sendMessage("Ping?").queue { response ->
            run {
                response.editMessage(
                    RioruEmbed(ctx)
                        .setThumbnail(ctx.getJDA().selfUser.effectiveAvatarUrl)
                        .setDescription("Ping: ${System.currentTimeMillis() - time} ms\n" +
                                "Gateway Ping: ${ctx.getJDA().gatewayPing} ms")
                    .build()
                ).queue()
            }
        }
    }
}