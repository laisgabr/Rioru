package com.riorucorp.projects.rioru.commands

import com.riorucorp.projects.rioru.commands.args.SlashCommandArgument

abstract class AbstractSlashCommand {
    open val arguments: SlashCommandArgument = javaClass.getAnnotation(SlashCommandArgument::class.java)
    open val config: CommandInfo = javaClass.getAnnotation(CommandInfo::class.java)
    abstract fun execute(ctx: SlashCommandContext)
}