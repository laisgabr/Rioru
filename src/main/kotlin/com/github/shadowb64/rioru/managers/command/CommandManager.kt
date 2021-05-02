package com.github.shadowb64.rioru.managers.command

import com.github.shadowb64.rioru.Rioru
import com.github.shadowb64.rioru.commands.caramel.AbstractCommand
import com.github.shadowb64.rioru.commands.vanilla.utils.PingCommand
import com.github.shadowb64.rioru.utilities.Logger
import net.dv8tion.jda.api.entities.Command
import net.dv8tion.jda.api.requests.restaction.CommandUpdateAction

class CommandManager {
    init {
        registerCommand(
            PingCommand(),
            CommandUpdateAction.OptionData(Command.OptionType.STRING, "option", "The Options")
        )
    }

    companion object {
        val commands = ArrayList<AbstractCommand>()
        fun registerCommand(command: AbstractCommand, vararg options: CommandUpdateAction.OptionData) {
            with(command.config) {

                var cmd = CommandUpdateAction.CommandData(name, if(description == "https://rioru.website/commands") {
                    description += "/"
                    description
                }
                  else "" )

                for (option in options) {
                    cmd = cmd.addOption(option)
                }

                Rioru.commands.addCommands(cmd)
                commands.add(this)

                Logger.managers { "[ SLASH COMMANDS ] [ $name ] loaded with success" }
            }
        }

        fun getCommandByName(name: String): AbstractCommand? = commands.find { c -> c.name == name }
    }
}