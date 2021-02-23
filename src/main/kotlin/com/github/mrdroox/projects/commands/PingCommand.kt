package com.github.mrdroox.projects.commands

import com.github.mrdroox.projects.utilities.*

class PingCommand: Command() {
    override var name: String? = "ping"
    override var aliases = listOf("latency", "apiping")
    override var description = "commands:$name.description"
    override var usage = "commands:$name.usage"
    override var category = CommandCategory.UTILITIES
    override var canDisable = false

    override fun execute(ctx: CommandContext) {
        val embed = ZoeEmbed(ctx.author)
        ctx.textChannel?.sendMessage(embed!!.build())?.queue()
    }
}