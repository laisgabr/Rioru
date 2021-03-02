package com.github.mrdroox.projects.commands

import com.github.mrdroox.projects.utilities.commands.Command
import com.github.mrdroox.projects.utilities.commands.enumerator.CommandCategory
import com.github.mrdroox.projects.utilities.commands.CommandContext
import com.github.mrdroox.projects.utilities.others.rioruUtils.RioruEmbed

class PingCommand: Command() {
    override var name: String? = "ping"
    override var aliases = listOf("latency", "apiping")
    override var category = CommandCategory.UTILITIES
    override var canDisable = false

    override fun execute(ctx: CommandContext) {
        val time = System.currentTimeMillis()
        ctx.getChannel().sendMessage("Ping?").queue { response ->
            run {
                response.editMessage(
                    RioruEmbed(ctx.getAuthor())
                        .setThumbnail(ctx.getJDA().selfUser.effectiveAvatarUrl)
                        .setDescription("Ping: ${System.currentTimeMillis() - time} ms\n" +
                                "Gateway Ping: ${ctx.getJDA().gatewayPing} ms")
                    .build()
                ).queue()
            }
        }
    }
}