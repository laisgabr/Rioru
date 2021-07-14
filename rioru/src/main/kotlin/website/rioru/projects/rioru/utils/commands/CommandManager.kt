package website.rioru.projects.rioru.utils.commands

import website.rioru.projects.rioru.utils.Logger

object CommandManager {
    private val commands = ArrayList<AbstractCommand>()

    fun addCommand(command: AbstractCommand) {
        commands.add(command)
        Logger.info { "[ COMMANDS ] Command \"${command.name}\" registered with success" }

    }
}