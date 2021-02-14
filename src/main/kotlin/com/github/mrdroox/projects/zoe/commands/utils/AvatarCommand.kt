package com.github.mrdroox.projects.zoe.commands.utils

import com.github.mrdroox.projects.zoe.structures.Command
import com.github.mrdroox.projects.zoe.structures.CommandContext
import com.github.mrdroox.projects.zoe.structures.ZoeEmbed

class AvatarCommand: Command() {
    override var name: String? = "avatar"
    override var aliases: List<String> = listOf("av")
    override var description: String? = ""
    override var usage: String? = ""
    override var category: String? = "Utils"

    override fun execute(ctx: CommandContext) {
        val embed: ZoeEmbed? = ctx.getAuthor()?.let { ZoeEmbed(it) }
        embed?.setImage(ctx.getAuthor()?.avatarUrl)
        ctx.getChannel()?.sendMessage(embed?.build()!!)?.queue()
    }
}