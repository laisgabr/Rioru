package com.github.mrdrooxbr.rioru.bot.commands.rioruteam

import com.github.mrdrooxbr.rioru.bot.structures.commands.Command
import com.github.mrdrooxbr.rioru.bot.structures.commands.CommandContext

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