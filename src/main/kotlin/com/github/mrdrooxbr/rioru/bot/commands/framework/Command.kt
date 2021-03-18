package com.github.mrdrooxbr.rioru.bot.commands.framework

abstract class Command {
    private val config = javaClass.getAnnotation(CommandInfo::class.java)
    open val name = config.name
    open val aliases = config.aliases
    open val description = config.description
    open val usage = config.usage
    open val category = config.category
    open val userPermissionsNeeded = config.userPermissionsNeeded
    open val rioruPermissionsNeeded = config.rioruPermissionsNeeded
    open val cooldown = config.cooldown
    open val disabled = config.disabled
    open val disabledReason = config.disabledReason

    abstract fun execute(ctx: CommandContext)
}