package com.github.mrdroox.projects.zoe.commands.developer

import com.github.mrdroox.projects.zoe.structures.Command
import com.github.mrdroox.projects.zoe.structures.CommandContext

class EvalCommand: Command() {
    override var name: String? = "eval"
    override var aliases: List<String> = listOf("e", "ev")
    override var description: String? = "commands:$name.description"
    override var usage: String? = "commands:$name.usage"
    override var category: String? = "commands:$name.category"
    override var devsOnly: Boolean = true
    override var canDisable: Boolean = false
    override var hidden: Boolean = true

    override fun execute(ctx: CommandContext) {

    }
}