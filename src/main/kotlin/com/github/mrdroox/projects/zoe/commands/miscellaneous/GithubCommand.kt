package com.github.mrdroox.projects.zoe.commands.miscellaneous

import com.github.mrdroox.projects.zoe.structures.Command
import com.github.mrdroox.projects.zoe.structures.CommandContext

class GithubCommand: Command() {
    override var name: String? = "github"
    override var aliases: List<String> = listOf("git", "gh")

    override fun execute(ctx: CommandContext) {
        if(ctx.getArgs()?.isEmpty() == true) return ctx.getChannel()?.sendMessage("Você precisa passar um argumento")!!.queue()
    }
}