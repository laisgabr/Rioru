package com.github.mrdrooxbr.rioru.bot.commands.rioruteam

import com.github.mrdrooxbr.rioru.bot.structures.commands.Command
import com.github.mrdrooxbr.rioru.bot.structures.commands.CommandContext

class RIMSCommand: Command() {
    override var name: String? = "rims"
    override fun execute(ctx: CommandContext) {
        when {
            ctx.getArgs().isEmpty() -> {
                ctx.getChannel().sendMessage("You need pass a argument valid for me").queue()
                return
            }

            ctx.getArgs()[0].toLowerCase() === "inspect_donations" -> {

            }

            ctx.getArgs()[0].toLowerCase() === "rioru_ban" -> {

            }

            ctx.getArgs()[0].toLowerCase() === "rioru_unban" -> {

            }

            ctx.getArgs()[0].toLowerCase() === "blacklist" -> {

            }
        }
    }
}