package com.riorucorp.projects.rioru.commands

import com.riorucorp.projects.rioru.commands.args.CommandArgument

abstract class AbstractCommand {
    open val arguments: CommandArgument = javaClass.getAnnotation(CommandArgument::class.java)
    open val config: CommandInfo = javaClass.getAnnotation(CommandInfo::class.java)
    abstract fun execute(ctx: CommandContext)
}