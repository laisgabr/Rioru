package com.riorucorp.projects.rioru.commands

import com.riorucorp.projects.rioru.commands.slash.PingCommand
import org.javacord.api.DiscordApi
import org.javacord.api.command.ApplicationCommandBuilder
import org.javacord.api.command.ApplicationCommandOptionBuilder

class CommandManager(private val api: DiscordApi) {
    val commands: ArrayList<AbstractCommand> = ArrayList()

    init {
        registerCommands(PingCommand())
    }

    fun registerCommands(vararg abstractCommands: AbstractCommand) {
        for (cmd in abstractCommands) {
            val slash = ApplicationCommandBuilder()
            slash.setName(cmd.config.name)
            slash.setDescription(cmd.config.description)
            for(i in cmd.arguments.name.indices) {
                slash.addOption(ApplicationCommandOptionBuilder()
                    .setName(cmd.arguments.name[i])
                    .setDescription(cmd.arguments.description[i])
                    .setRequired(cmd.arguments.isRequired[i])
                    .setType(cmd.arguments.type[i])
                    .build())
            }
            slash.createGlobal(api).join()
        }
    }
}