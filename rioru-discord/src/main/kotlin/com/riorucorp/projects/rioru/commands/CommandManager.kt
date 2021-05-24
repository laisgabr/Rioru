package com.riorucorp.projects.rioru.commands

import com.riorucorp.projects.rioru.commands.marshall.PingCommand
import com.riorucorp.projects.rioru.commands.slash.PingSlashCommand
import com.riorucorp.projects.rioru.utilities.Logger
import org.javacord.api.DiscordApi
import org.javacord.api.command.ApplicationCommandBuilder
import org.javacord.api.command.ApplicationCommandOptionBuilder

class CommandManager(private val api: DiscordApi) {
    val slashCommands: ArrayList<AbstractSlashCommand> = ArrayList()
    val marshallCommands: ArrayList<AbstractCommand> = ArrayList()

    init {
        registerCommands(PingCommand())
        registerCommands(PingSlashCommand())
    }

    private fun registerCommands(vararg commands: AbstractCommand) {
        for (cmd in commands) {
            marshallCommands.add(cmd)
            Logger.info { "COMMAND ${cmd.config.name} loaded with success" }
        }
    }

    private fun registerCommands(vararg abstractCommands: AbstractSlashCommand) {
        for (cmd in abstractCommands) {
            val slash = ApplicationCommandBuilder()
            slash.setName(cmd.config.name)
            slash.setDescription(cmd.config.description)
            for (i in cmd.arguments.name.indices) {
                slash.addOption(
                    ApplicationCommandOptionBuilder()
                        .setName(cmd.arguments.name[i])
                        .setDescription(cmd.arguments.description[i])
                        .setRequired(cmd.arguments.isRequired[i])
                        .setType(cmd.arguments.type[i])
                        .build()
                )
            }
            slash.createGlobal(api).also { it.join() }
            slashCommands.add(cmd)
        }
    }
}