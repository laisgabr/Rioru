package com.github.mrdroox.projects.commands.rioruteam

import com.github.mrdroox.projects.utilities.commands.Command
import com.github.mrdroox.projects.utilities.commands.CommandContext

class RIMSCommand: Command() {
    override var name: String? = "rims"
    override fun execute(ctx: CommandContext) {
        when {
            ctx.getArgs()[0].toLowerCase() === "inspect_fragments" -> {

            }
            ctx.getArgs()[0].toLowerCase() === "ban_reason" -> {

            }
        }
    }
}