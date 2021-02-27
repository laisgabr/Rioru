package com.github.mrdroox.projects.controllers

import com.github.mrdroox.projects.commands.*
import com.github.mrdroox.projects.commands.`fun`.*
import com.github.mrdroox.projects.utilities.others.LoggerActivities
import com.github.mrdroox.projects.utilities.commands.Command
import kotlin.collections.ArrayList

class CommandManager {
    init {
        addCommands(
            // Fun
            DanceCommand(),
            KissCommand(),
            SlapCommand(),
            // Utils
            PingCommand()
        )
    }

    companion object {
        private val commands = ArrayList<Command>()
        private fun addCommands(vararg cmd: Command) {
            commands.addAll(cmd)

            for(command in cmd) {
                LoggerActivities.success("[ Commands ] | ${command.name}  loaded with success")
            }
        }

        fun getCommand(query: String): List<Command>? {
            val c = getCommands().filter { c -> c.name.equals(query.toLowerCase()) || c.aliases.contains(query.toLowerCase()) }
            return if(c.isEmpty()) null else c
        }

        fun getCommands(): List<Command> {
            return commands
        }
    }
}
