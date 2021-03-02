package com.github.mrdroox.projects.utilities.commands

import com.github.mrdroox.projects.utilities.Config
import com.github.mrdroox.projects.utilities.commands.enumerator.CommandCategory
import net.dv8tion.jda.api.EmbedBuilder
import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent

class CommandOptions(private val ctx: CommandContext, private val command: Command, private val AuthorID: String, private val event: GuildMessageReceivedEvent) {
    init { context() }

    private fun context() {
        if(command.category === CommandCategory.DEVELOPER && AuthorID !== Config.get("owner")) return
        if(command.category === CommandCategory.RIORU_ROOM && event.guild.id !== Config.get("support_server_id")) {
            ctx.sendMessage("CommandOptions:utils:")
            return
        }

        if(command.argsSize !== null && ctx.getArgs().size < command.argsSize!!) {
            ctx.sendMessage("")
            return
        }
    }
}