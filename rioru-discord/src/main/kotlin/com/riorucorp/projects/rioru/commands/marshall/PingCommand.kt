package com.riorucorp.projects.rioru.commands.marshall

import com.riorucorp.projects.rioru.commands.AbstractCommand
import com.riorucorp.projects.rioru.commands.CommandContext
import com.riorucorp.projects.rioru.commands.CommandInfo

@CommandInfo(
    name = "ping",
    isSlash = false
)
class PingCommand: AbstractCommand() {
    override fun execute(ctx: CommandContext) {

    }
}