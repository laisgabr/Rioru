package com.github.shadowb64.rioru.commands.caramel

import net.dv8tion.jda.api.Permission

enum class CommandCategory {
    UTILS, MISCELLANEOUS, DEVELOPER, DISCORD, MUSIC
}

abstract class AbstractCommand(
    val name: String,
    val aliases: List<String> = listOf(),
    val category: CommandCategory = CommandCategory.MISCELLANEOUS,
    val cooldown: Int = 3,
    val userPermissionsNeeded: List<Permission> = listOf(),
    val botPermissionsNeeded: List<Permission> = listOf(),
    val canDisable: Boolean = true,
    val disableReason: String = "",
    val disableTime: Long = System.currentTimeMillis(),
    val verifyBotAlreadyInVoiceChannel: Boolean = false,
    val verifyIfVoiceChannel: Boolean = false,
    val verifySameChannel: Boolean = false,
    val verifyIfBotVoiceChannel: Boolean = false,
) {
    abstract fun run(context: CommandContext)
}