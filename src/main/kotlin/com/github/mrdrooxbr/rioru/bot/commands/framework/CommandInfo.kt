package com.github.mrdrooxbr.rioru.bot.commands.framework

import net.dv8tion.jda.api.Permission

annotation class CommandInfo(
    val name: String = "undefined",
    val aliases: Array<String> = [],
    val description: String = "Not have a description proved",
    val usage: String = "Not have a usage proved",
    val category: CommandCategory = CommandCategory.MISCELLANEOUS,
    val userPermissionsNeeded: Array<Permission> = [],
    val rioruPermissionsNeeded: Array<Permission> = [],
    val cooldown: Int = 4,
    val disabled: Boolean = false,
    val disabledReason: String = "..."
    )
