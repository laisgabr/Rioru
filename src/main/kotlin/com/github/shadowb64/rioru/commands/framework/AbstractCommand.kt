package com.github.shadowb64.rioru.commands.framework

import net.dv8tion.jda.api.Permission

abstract class AbstractCommand(
    val name: String,
    val aliases: List<String> = listOf(),
    val category: CommandCategory = CommandCategory.MISCELLANEOUS,
    val cooldown: Int = 3,
    val userPermissionsNeeded: List<Permission> = listOf(),
    val botPermissionsNeeded: List<Permission> = listOf(),
    val canDisable: Boolean = true
) {
    abstract fun run(context: CommandContext)
}