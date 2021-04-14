package com.github.shadowb64.rioru.managers

import com.github.shadowb64.rioru.commands.AbstractCommand
import com.github.shadowb64.rioru.commands.vanilla.utils.PingCommand
import com.github.shadowb64.rioru.utilities.RioruUtilities

class CommandManager {
    init {
        registerCommands(
            PingCommand()
        )
    }
    companion object {
        val commands = ArrayList<AbstractCommand>()

        fun getCommand(query: String): AbstractCommand? = commands.find { c -> c.name == query.toLowerCase() || c.aliases.contains(query.toLowerCase()) }
        fun unregisterCommand(commandName: String): Boolean? {
            val cmd = commands.find { c -> c.name === commandName }
            if(cmd === null) return null

            return commands.remove(cmd)
        }


        fun registerCommands(vararg cmds: AbstractCommand) {
            RioruUtilities.logger.warn { "[ MANAGERS ] [ Commands ] Just started loading the commands" }
            for(cmd in cmds) {
                commands.add(cmd)
                RioruUtilities.logger.info { "[ COMMANDS ] [ ${cmd.name} ] loaded with success" }
            }

            RioruUtilities.logger.info { "[ COMMANDS ] All commands loaded with success c:" }
        }
    }
}