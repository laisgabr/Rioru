package website.rioru.projects.rioru.utils.commands

import website.rioru.projects.rioru.utils.parameters.Parameter

abstract class AbstractCommand(
    val name: String,
    val aliases: List<String> = listOf(),
    val description: String,
    val parameters: List<Parameter> = listOf()
) {
    abstract fun execute(context: CommandContext)
}