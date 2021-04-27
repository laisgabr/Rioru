package com.github.shadowb64.rioru.commands.caramel

import net.dv8tion.jda.api.entities.GuildChannel
import net.dv8tion.jda.api.entities.User

object TypeGetter {
    fun getUser(context: CommandContext): User? {
        try {
            val mentionedMemberList = context.message.mentionedMembers
            val mentionedUserList = context.message.mentionedUsers
            when {
                mentionedMemberList.isEmpty() && mentionedUserList.isEmpty() && context.args.isEmpty() -> return context.author
                mentionedMemberList.isNotEmpty() -> return mentionedMemberList[0].user
                mentionedMemberList.isEmpty() && context.args.isNotEmpty() -> {
                    if (context.args[0].toLongOrNull() != null) {
                        context.shardManager?.retrieveUserById(context.args[0])
                            .also { user -> return user?.complete() }
                    } else {
                        val usersFilter = context.guild.getMembersByEffectiveName(context.args[0], true)
                        return usersFilter[0].user
                    }

                }
                else -> return context.author
            }
        } catch (e: Exception) {
            return null
        }
    }

    fun getChannel(context: CommandContext): GuildChannel {
        val defaultChannel = context.textChannel
        val mentionedChannelsList = context.message.mentionedChannels
        return when {
            mentionedChannelsList.isEmpty() && context.args.isEmpty() -> defaultChannel
            mentionedChannelsList.isNotEmpty() -> {
                if (context.guild.getGuildChannelById(mentionedChannelsList[0].id) === null) defaultChannel
                else mentionedChannelsList[0]
            }
            mentionedChannelsList.isEmpty() && context.args.isNotEmpty() -> context.guild.getGuildChannelById(
                context.args[0]
            ) ?: defaultChannel
            else -> defaultChannel
        }
    }
}