package com.github.mrdroox.projects.zoe.commands.utils

import com.github.mrdroox.projects.zoe.structures.Command
import com.github.mrdroox.projects.zoe.structures.CommandContext

class PingCommand: Command() {
    override var name: String? = "ping"
    override var aliases: List<String> = listOf("latency", "apiping")
    override var description: String? = "commands:$name.description"
    override var usage: String? = "commands:$name.usage"
    override var category: String? = "commands:$name.category"
    override var canDisable: Boolean = false

    override fun execute(ctx: CommandContext) {
        val time = System.currentTimeMillis()
        ctx.getChannel()?.sendMessage("🏓 | Pong! :3")
            ?.queue { response -> response.editMessageFormat("Uh, %d ms", System.currentTimeMillis() - time).queue() }
    }
}