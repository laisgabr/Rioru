package com.github.mrdrooxbr.rioru.bot.structures.commands

import com.github.mrdrooxbr.rioru.bot.structures.commands.enumerator.CommandCategory
import com.github.mrdrooxbr.rioru.bot.structures.commands.enumerator.CommandUtils
import net.dv8tion.jda.api.Permission

@Suppress("LeakingThis")
open class Command {
    open var name: String? = null
    open var aliases: List<String> = listOf()
    open var description = CommandUtils.DEFAULT_DESCRIPTION
    open var usage = CommandUtils.DEFAULT_USAGE
    open var category = CommandCategory.MISCELLANEOUS
    open var rioruPermissions: List<Permission> = listOf()
    open var userPermissions: List<Permission> = listOf()
    open var enabled = true
    open var disabledReason: String? = null
    open var canDisable = true
    open var cooldown = 4
    open var argsSize: Int? = null

    open fun execute(ctx: CommandContext) {
        return
    }
}