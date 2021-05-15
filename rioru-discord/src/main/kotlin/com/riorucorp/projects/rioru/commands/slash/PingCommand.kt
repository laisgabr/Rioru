package com.riorucorp.projects.rioru.commands.slash

import com.riorucorp.projects.rioru.commands.AbstractCommand
import com.riorucorp.projects.rioru.commands.CommandContext
import com.riorucorp.projects.rioru.commands.CommandInfo
import com.riorucorp.projects.rioru.utilities.args.Argument
import org.javacord.api.command.ApplicationCommandOptionType.*

@CommandInfo(
    name = "ping"
)
// Estilo de argumentos :p
@Argument(
    name = ["", ""],
    description = [""],
    isRequired = [true, false],
    type = [STRING]
)
class PingCommand: AbstractCommand() {
    override fun execute(ctx: CommandContext) {

    }
}