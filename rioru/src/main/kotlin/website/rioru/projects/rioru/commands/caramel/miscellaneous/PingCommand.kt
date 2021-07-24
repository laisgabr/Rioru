package website.rioru.projects.rioru.commands.caramel.miscellaneous

import website.rioru.projects.rioru.utils.commands.AbstractCommand
import website.rioru.projects.rioru.utils.commands.CommandContext
import website.rioru.projects.rioru.utils.parameters.Parameter
import website.rioru.projects.rioru.utils.parameters.ParameterType

class PingCommand: AbstractCommand(
    "ping",
    description = "",
    parameters = listOf(Parameter(ParameterType.STRING, false))
) {
    override fun execute(context: CommandContext) {

    }
}