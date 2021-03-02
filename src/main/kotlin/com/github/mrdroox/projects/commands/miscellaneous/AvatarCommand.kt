package com.github.mrdroox.projects.commands.miscellaneous

import com.github.mrdroox.projects.utilities.commands.Command
import com.github.mrdroox.projects.utilities.commands.CommandContext
import com.github.mrdroox.projects.utilities.others.rioruUtils.RioruEmbed
import net.dv8tion.jda.api.entities.User
import java.lang.NumberFormatException

class AvatarCommand: Command() {
    override var name: String? = "avatar"
    override var aliases: List<String> = listOf("av", "a")
    override fun execute(ctx: CommandContext) {
        options(ctx)
        val user = getUser(ctx)
        val embed = RioruEmbed(ctx.getAuthor())
            .setTitle("Avatar de [${user?.name}](${user?.effectiveAvatarUrl})")
            .setImage(user?.effectiveAvatarUrl).build()
        ctx.getChannel().sendMessage(embed).queue()
    }

    private fun getUser(ctx: CommandContext): User? {
        when {
            ctx.getMessage().mentionedMembers.isNotEmpty() -> return ctx.getMessage().mentionedMembers[0].user
            ctx.getMessage().mentionedUsers.isNotEmpty() -> return ctx.getMessage().mentionedUsers[0]
        }
        return try {
            ctx.getShardManager()?.getUserById(ctx.getArgs()[0])
        } catch(e: NumberFormatException) {
            null
        }
    }

    private fun options(ctx: CommandContext) {
        if(ctx.getArgs().isEmpty() &&
            ctx.getMessage().mentionedMembers.isEmpty() &&
            ctx.getMessage().mentionedUsers.isEmpty()) {
            ctx.getChannel().sendMessage("Você precisa mencionar alguém, me passar um id ou me passar um nickname")
                .queue()
            return
        }

        val user = getUser(ctx)
        if(user === null) {
            ctx.getChannel().sendMessage("Não achei ninguém com `${ctx.getArgs()[0]}`, lembre-se que eu pesquiso por ID e menção").queue()
            return
        }
    }

}