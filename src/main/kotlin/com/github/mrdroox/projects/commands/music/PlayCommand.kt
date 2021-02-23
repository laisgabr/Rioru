package com.github.mrdroox.projects.commands.music

import com.github.mrdroox.projects.utilities.Command
import com.github.mrdroox.projects.utilities.CommandCategory
import com.github.mrdroox.projects.utilities.CommandContext

class PlayCommand: Command() {
    override var name: String? = "play"
    override var aliases = listOf("p", "tocar")
    override var category = CommandCategory.MUSIC

    override fun execute(ctx: CommandContext) {

    }
}