package com.github.shadowb64.rioru.commands.caramel

import net.dv8tion.jda.api.Permission

abstract class AbstractCommand(
    val name: String,
    val aliases: List<String> = listOf(),
    val category: CommandCategory = CommandCategory.MISCELLANEOUS,
    val cooldown: Int = 3,
    val userPermissionsNeeded: List<Permission> = listOf(),
    val botPermissionsNeeded: List<Permission> = listOf(),
    val canDisable: Boolean = true,
    var disableReason: String = "",
    var disableTime: String = "",
    var verifyBotAlreadyInVoiceChannel: Boolean = false,
    var verifyIfVoiceChannel: Boolean = false,
    var verifySameChannel: Boolean = false,
    var verifyIfBotVoiceChannel: Boolean = false,
    val needArgs: Boolean = false
) {
    abstract fun run(context: CommandContext)
}