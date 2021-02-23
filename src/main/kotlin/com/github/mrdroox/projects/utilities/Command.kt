package com.github.mrdroox.projects.utilities

@Suppress("LeakingThis")
open class Command {
    open var name: String? = null
    open var aliases: List<String> = listOf()
    open var description = "commands:${name}:description"
    open var usage: String = "commands:${name}:usage"
    open var category: CommandCategory = CommandCategory.MISCELLANEOUS
    open var listInWebSite: Boolean = true
    open var enabled: Boolean = true
    open var disableReason: String? = null
    open var hidden: Boolean = false
    open var canDisable = true
    open var cooldown = 4

    open fun execute(ctx: CommandContext) {
        return
    }
}