package com.riorucorp.projects.rioru.commands

import com.riorucorp.projects.rioru.utilities.args.Argument

abstract class AbstractCommand {
    open val arguments = javaClass.getAnnotation(Argument::class.java)
    open val config = javaClass.getAnnotation(CommandInfo::class.java)
    abstract fun execute(ctx: CommandContext)
}