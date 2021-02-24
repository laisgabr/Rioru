package com.github.mrdroox.projects.utilities.commands

import com.github.mrdroox.projects.utilities.commands.enumerator.CommandCategory
import com.github.mrdroox.projects.utilities.commands.enumerator.CommandUtils

@Suppress("LeakingThis")
open class Command {
    open var name: String? = null
    open var aliases: List<String> = listOf()
    open var description = CommandUtils.DEFAULT_DESCRIPTION
    open var usage = CommandUtils.DEFAULT_USAGE
    open var category = CommandCategory.MISCELLANEOUS
    open var enabled = true
    open var disableReason: String? = null
    open var canDisable = true
    open var cooldown = 4

    open fun execute(ctx: CommandContext) {
        return
    }
}