package com.github.mrdrooxbr.rioru.bot.commands.moderation

import com.github.mrdrooxbr.rioru.bot.structures.commands.Command
import com.github.mrdrooxbr.rioru.bot.structures.commands.CommandContext
import net.dv8tion.jda.api.Permission

class BanCommand: Command() {
    override var name: String? = "ban"
    override var aliases: List<String> = listOf("banir")
    override var userPermissions: List<Permission> = listOf(Permission.BAN_MEMBERS)
    override var rioruPermissions: List<Permission> = listOf(Permission.BAN_MEMBERS)

    override fun execute(ctx: CommandContext) {

    }
}