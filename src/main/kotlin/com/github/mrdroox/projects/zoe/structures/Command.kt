package com.github.mrdroox.projects.zoe.structures

open class Command {
    open var name: String? = null
    open var aliases: List<String> = listOf()
    open var description: String? = "commands:$name.description"
    open var usage: String? = "commands:$name.usage"
    open var category: String? = "commands:$name.category"
    open var devsOnly = false
    open var listInWebSite = true
    open var enabled = true
    open var hidden = false
    open var canDisable = true
    open var cooldown = 4

    open fun execute(ctx: CommandContext) {
        return
    }
}