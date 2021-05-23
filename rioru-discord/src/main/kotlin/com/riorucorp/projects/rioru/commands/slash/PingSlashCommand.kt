package com.riorucorp.projects.rioru.commands.slash

import com.riorucorp.projects.rioru.commands.AbstractSlashCommand
import com.riorucorp.projects.rioru.commands.SlashCommandContext
import com.riorucorp.projects.rioru.commands.CommandInfo
import com.riorucorp.projects.rioru.commands.args.SlashCommandArgument
import org.javacord.api.command.ApplicationCommandOptionType.*

@CommandInfo(
    name = "ping",
    isSlash = true
)
@SlashCommandArgument(
    name = ["", ""],
    description = [""],
    isRequired = [true, false],
    type = [STRING]
)
class PingSlashCommand: AbstractSlashCommand() {
    override fun execute(ctx: SlashCommandContext) {

    }
}