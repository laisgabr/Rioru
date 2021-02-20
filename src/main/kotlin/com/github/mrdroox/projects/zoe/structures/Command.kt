package com.github.mrdroox.projects.zoe.structures

@Suppress("LeakingThis")
open class Command {
    open var name: String? = null
    open var aliases: List<String> = listOf()
    open var description: String = "commands:${name}:description"
    open var usage: String = "commands:${name}:usage"
    open var category: String = "commands:${name}:category"
    open var devsOnly: Boolean = false
    open var listInWebSite: Boolean = true
    open var enabled: Boolean = true
    open var hidden: Boolean = false
    open var canDisable: Boolean = true
    open var cooldown: Int = 4

    open fun execute(ctx: CommandContext) {
        return
    }
}