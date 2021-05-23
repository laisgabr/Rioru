package com.riorucorp.projects.rioru.commands

annotation class CommandInfo(
    val name: String,
    val aliases: Array<String> = [],
    val description: String = "Descrição não foi provida :c",
    val usage: String = "Forma de usar não foi provida :c",
    val category: String = "Miscellaneous",
    val isSlash: Boolean
)
