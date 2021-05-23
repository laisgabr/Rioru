package com.riorucorp.projects.rioru.commands.args

annotation class CommandArgument(
    val name: Array<String>,
    val position: IntArray,
    val joinnable: BooleanArray,
    val isRequired: BooleanArray,
    val type: Array<ArgumentType>
)
