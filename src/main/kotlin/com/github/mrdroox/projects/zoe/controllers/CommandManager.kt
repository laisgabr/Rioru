package com.github.mrdroox.projects.zoe.controllers

import com.github.mrdroox.projects.utils.LoggerActivities
import com.github.mrdroox.projects.zoe.commands.utils.*
import com.github.mrdroox.projects.zoe.structures.Command
import com.github.mrdroox.projects.zoe.structures.CommandContext

import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent

import java.util.*

class CommandManager {
    init {
        // Utils
        addCommand(PingCommand())
        // /Utils
    }

    private fun addCommand(cmd: Command) {
        commands.add(cmd)
        LoggerActivities.success("[ Commands ] | ${cmd.name} loaded with success")
    }

    companion object {
        private val commands: MutableList<Command> = ArrayList()

        @JvmStatic
        fun getCommand(query: String): Command? {
            val c = commands.filter { c -> c.name.equals(query.toLowerCase()) || c.aliases.contains(query.toLowerCase()) }
            return if(c.isEmpty()) null else c[0]
        }


        fun getCommands(): List<Command> {
            return commands
        }

        fun handle(event: GuildMessageReceivedEvent, prefix: String = "test!") {
            val split: List<String> = event.message.contentRaw.trim().split(" ")

            val invoke = split[0].replace(prefix, "").toLowerCase()
            println(invoke)
            val cmd: Command? = getCommand(invoke)
            println(cmd)

            if (cmd != null) {
                event.channel.sendTyping().queue()
                val args = listOf(split).subList(1, split.size).toMutableList()
                println(args)

                val ctx = CommandContext(event, args)
                cmd.execute(ctx)
            } else {
                event.channel.sendMessage(":x: | O comando `" + split[0].replace(prefix, "") + "` não existe").queue()
            }
        }
    }
}
