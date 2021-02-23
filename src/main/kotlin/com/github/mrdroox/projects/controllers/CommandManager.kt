package com.github.mrdroox.projects.controllers

import com.github.mrdroox.projects.commands.PingCommand
import com.github.mrdroox.projects.utils.LoggerActivities
import com.github.mrdroox.projects.utilities.Command
import com.github.mrdroox.projects.utilities.CommandContext

import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent

import kotlin.collections.ArrayList

class CommandManager {
    init {
        // Utils
        addCommand(PingCommand())
        // /Utils
    }
    companion object {
        private fun addCommand(cmd: Command) {
            commands.add(cmd)
            LoggerActivities.success("[ Commands ] | ${cmd.name} loaded with success")
        }


        private val commands = ArrayList<Command>()

        @JvmStatic
        fun getCommand(query: String): List<Command>? {
            val c = commands.filter { c -> c.name.equals(query.toLowerCase()) || c.aliases.contains(query.toLowerCase()) }
            return if(c.isEmpty()) null else c
        }


        fun getCommands(): List<Command> {
            return commands
        }

        fun handle(event: GuildMessageReceivedEvent, prefix: String = "test!") {
            val args = event.message.contentRaw.trim().split(" ") as ArrayList

            val command = args[0].replace(prefix, "").toLowerCase()
            val cmd = getCommand(command)

            if (cmd !== null) {
                event.channel.sendTyping().queue()
                args.removeAt(0)

                val ctx = CommandContext(event, args)
                cmd[0].execute(ctx)
            } else {
                event.channel.sendMessage(":x: | O comando `" + args[0].replace(prefix, "") + "` não existe").queue()
            }
        }
    }
}
