package com.github.mrdrooxbr.rioru.bot.managers

import com.github.mrdrooxbr.rioru.bot.commands.impl.PingCommand
import com.github.mrdrooxbr.rioru.bot.commands.framework.Command
import com.github.mrdrooxbr.rioru.utils.LoggerActivities
import kotlin.collections.ArrayList

class CommandManager {
    init {
        addCommands(
            // Utils
            PingCommand()
        )
    }

    companion object {
        private val commands = ArrayList<Command>()
        private fun addCommands(vararg cmd: Command) {
            commands.addAll(cmd)

            for(command in cmd) {
                LoggerActivities.success("[ Commands ] | [ ${command.name} ] loaded with success")
            }
        }

        fun getCommand(query: String): List<Command>? {
            val c = getCommands().filter { c -> c.name == query.toLowerCase() || c.aliases.contains(query.toLowerCase()) }
            return if(c.isEmpty()) null else c
        }

        fun getCommands(): List<Command> {
            return commands
        }
    }
}
