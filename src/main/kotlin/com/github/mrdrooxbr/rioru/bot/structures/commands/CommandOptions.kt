package com.github.mrdrooxbr.rioru.bot.structures.commands

import com.github.mrdrooxbr.rioru.bot.structures.commands.enumerator.CommandCategory
import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent

class CommandOptions(private val ctx: CommandContext, private val command: Command, private val AuthorID: String, private val event: GuildMessageReceivedEvent) {
    init { context() }

    private fun context() {
        if(command.category === CommandCategory.DEVELOPER) return
        if(command.category === CommandCategory.RIORU_ROOM) {
            ctx.sendMessage("CommandOptions:utils:")
            return
        }

        if(command.argsSize !== null && ctx.getArgs().size < command.argsSize!!) {
            ctx.sendMessage("")
            return
        }
    }
}