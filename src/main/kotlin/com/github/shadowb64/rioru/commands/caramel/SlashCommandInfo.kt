package com.github.shadowb64.rioru.commands.caramel

import net.dv8tion.jda.api.Permission

annotation class SlashCommandInfo(
    val name: String,
    val description: String = "https://rioru.website/commands/",
    val category: CommandCategory = CommandCategory.MISCELLANEOUS,
    val userPermissionsNeeded: Array<Permission> = [],
    val botPermissionsNeeded: Array<Permission> = [],
    val verifyBotAlreadyInVoiceChannel: Boolean = false,
    val verifyIfVoiceChannel: Boolean = false,
    val verifySameChannel: Boolean = false,
    val verifyIfBotVoiceChannel: Boolean = false
)
