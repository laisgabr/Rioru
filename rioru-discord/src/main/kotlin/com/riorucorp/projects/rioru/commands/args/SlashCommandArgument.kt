package com.riorucorp.projects.rioru.commands.args

import org.javacord.api.command.ApplicationCommandOptionType

annotation class SlashCommandArgument(
    val name: Array<String>,
    val description: Array<String>,
    val isRequired: BooleanArray,
    val type: Array<ApplicationCommandOptionType>
)
