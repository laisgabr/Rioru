package com.github.shadowb64.rioru.commands.vanilla.discord

import com.github.shadowb64.rioru.commands.*
import net.dv8tion.jda.api.entities.User

class AvatarCommand : AbstractCommand(
    name = "avatar",
    aliases = listOf("user-icon"),
    category = CommandCategory.DISCORD
) {
    override fun run(context: CommandContext) {
        val user = getUser(context)
        if(user === null) {
            context.messageEvent.channel.sendMessage("Precisa me passar um user arrombado do caralho").queue()
            return
        }

        val embed = RioruEmbedBuilder(context, RioruColor.DEFAULT)
            .setImage(user.effectiveAvatarUrl)
        context.messageEvent.channel.sendMessage(embed.build()).queue()
    }

    private fun getUser(context: CommandContext): User? {
        val author = context.messageEvent.author
        val mentionedUsersList = context.messageEvent.message.mentionedUsers
        return when {
            mentionedUsersList.isEmpty() && context.args.isEmpty() -> author
            mentionedUsersList.isNotEmpty() -> mentionedUsersList[0]
            mentionedUsersList.isEmpty() && context.args.isNotEmpty() -> {
                val user = context.messageEvent.jda.shardManager!!.getUserById(context.args[0])
                if(user === null) null else user
            }
            else -> author
        }
    }
}