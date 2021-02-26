package com.github.mrdroox.projects.controllers

import com.github.mrdroox.projects.commands.*
import com.github.mrdroox.projects.commands.`fun`.*
import com.github.mrdroox.projects.utilities.others.LoggerActivities
import com.github.mrdroox.projects.utilities.commands.Command
import kotlin.collections.ArrayList

class CommandManager {
    init {
        // Fun
        addCommand(SlapCommand())
        addCommand(KissCommand())
        // /Fun
        // Utils
        addCommand(PingCommand())
        // /Utils
    }
    companion object {
        private val commands = ArrayList<Command>()
        private fun addCommand(cmd: Command) {
            commands.add(cmd)
            LoggerActivities.success("[ Commands ] | ${cmd.name}  loaded with success")
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
