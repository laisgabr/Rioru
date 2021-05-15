package com.riorucorp.projects.rioru.utilities.args

import org.javacord.api.command.ApplicationCommandOptionType

annotation class Argument(
    val name: Array<String>,
    val description: Array<String>,
    val isRequired: BooleanArray,
    val type: Array<ApplicationCommandOptionType>
)
