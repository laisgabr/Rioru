package com.github.mrdrooxbr.rioru.bot.managers

import com.github.mrdrooxbr.rioru.bot.commands.*
import com.github.mrdrooxbr.rioru.bot.commands.`fun`.*
import com.github.mrdrooxbr.rioru.bot.commands.miscellaneous.*
import com.github.mrdrooxbr.rioru.utils.LoggerActivities
import com.github.mrdrooxbr.rioru.bot.structures.commands.Command
import kotlin.collections.ArrayList

class CommandManager {
    init {
        addCommands(
            // Fun
            DanceCommand(),
            KissCommand(),
            SlapCommand(),
            // Miscellaneous
            AvatarCommand(),
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
