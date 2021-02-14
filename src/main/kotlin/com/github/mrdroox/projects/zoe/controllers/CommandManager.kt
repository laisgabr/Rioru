package com.github.mrdroox.projects.zoe.controllers

import com.github.mrdroox.projects.utils.LoggerActivities
import com.github.mrdroox.projects.zoe.commands.developer.*
import com.github.mrdroox.projects.zoe.commands.miscellaneous.*
import com.github.mrdroox.projects.zoe.commands.utils.*
import com.github.mrdroox.projects.zoe.structures.Command
import com.github.mrdroox.projects.zoe.structures.CommandContext

import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent

import java.util.*

class CommandManager {
    init {
        // Developer
        addCommand(EvalCommand())
        // /Developer

        // Utils
        addCommand(PingCommand())
        addCommand(AvatarCommand())
        // /Utils

        // Miscellaneous
        addCommand(GithubCommand())
        // /Miscellaneous
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

            return try {
                c[0]
            } catch(e: Exception) {
                null
            }
        }

        fun getCommands(): List<Command> {
            return commands
        }

        fun handle(event: GuildMessageReceivedEvent, prefix: String = "test!") {
            val split: List<String> = event.message.contentRaw.trim().split(" ")

            val invoke = split[0].replace(prefix, "").toLowerCase()
            val cmd: Command? = getCommand(invoke)

            if (cmd != null) {
                event.channel.sendTyping().queue()
                val args: MutableList<List<String>> = listOf(split).subList(1, split.size).toMutableList()
                val ctx = CommandContext(event, args)
                try {
                    cmd.execute(ctx)
                } catch(e: Exception) {
                    event.channel.sendMessage(":cry: | Um erro aconteceu, me desculpe pela inconveniencia `${e.message}`").queue()
                }
            } else {
                event.channel.sendMessage(":x: | O comando `" + split[0].replace(prefix, "") + "` não existe").queue()
            }
        }
    }
}
