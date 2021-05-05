package com.github.shadowb64.rioru.managers.command

import com.github.shadowb64.rioru.Rioru
import com.github.shadowb64.rioru.commands.utils.Command
import com.github.shadowb64.rioru.commands.utils.SlashCommand
import com.github.shadowb64.rioru.utilities.Logger
import net.dv8tion.jda.api.requests.restaction.CommandUpdateAction.CommandData
import net.dv8tion.jda.api.requests.restaction.CommandUpdateAction.OptionData

class CommandManager {
    class Marshall {
        init {
            registerCommands(

            )
        }

        companion object {
            val commands = ArrayList<Command>()
            private fun registerCommands(vararg commandS: Command) {
                for (cmd in commandS) {
                    commands.add(cmd)
                    Logger.managers { "[ MARSHALL COMMANDS ] [ ${cmd.name} ] loaded with success" }
                }
            }
        }
    }

    class Slash {
        companion object {
            val commands = ArrayList<SlashCommand>()
            private fun registerSlashCommand(command: SlashCommand, vararg options: OptionData) {
                with(command) {
                    with(config) {
                        val desc = "$description/${category.name}#$name"
                        var cmd = CommandData(
                            name,
                            if (description == "https://rioru.website/commands") desc else description
                        )

                        for (option in options) cmd = cmd.addOption(option)

                        Rioru.commands.addCommands(cmd)
                        Logger.managers { "[ SLASH COMMANDS ] [ $name ] loaded with success" }
                    }

                    commands.add(this)
                }
            }

            fun getSlashCommandByName(name: String): SlashCommand? = commands.find { c -> c.name == name }
        }
    }
}