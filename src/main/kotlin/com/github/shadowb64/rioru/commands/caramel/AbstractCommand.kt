package com.github.shadowb64.rioru.commands.caramel

abstract class AbstractCommand {
    val config: SlashCommandInfo = javaClass.getAnnotation(SlashCommandInfo::class.java)
    open val name = config.name
    abstract fun run(context: CommandContext)
}