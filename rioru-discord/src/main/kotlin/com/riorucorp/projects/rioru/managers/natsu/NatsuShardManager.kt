package com.riorucorp.projects.rioru.managers.natsu

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import net.dv8tion.jda.api.JDA
import net.dv8tion.jda.api.entities.ChannelType
import net.dv8tion.jda.api.entities.Guild
import net.dv8tion.jda.api.entities.Member
import net.dv8tion.jda.api.entities.User

class NatsuShardManager(private val jda: JDA) {
    suspend fun getUserByID(id: String): User? =
        withContext(CoroutineScope(Dispatchers.IO).coroutineContext) {
            var user: User? = null
            jda.retrieveUserById(id).queue { c ->
                user = c
            }

            user
        }

    suspend fun getMembersByName(guild: Guild, memberName: String): List<Member>?  =
        withContext(CoroutineScope(Dispatchers.IO).coroutineContext) {
            guild.members.filter { c -> c.effectiveName.contains(memberName) || ((c.nickname != null) && c.nickname!!.contains(memberName) ) }.ifEmpty { null }
        }

    suspend fun getMemberByID(guild: Guild, memberId: String): Member? =
        withContext(CoroutineScope(Dispatchers.IO).coroutineContext) {
            guild.members.find { c -> c.id == memberId }
        }

    suspend fun getGuildByID(guildId: String): Guild? =
        withContext(CoroutineScope(Dispatchers.IO).coroutineContext) {
            jda.guilds.find { c -> c.id == guildId }
        }

    suspend fun getChannelTypeById(channelId: String): ChannelType? =
        withContext(CoroutineScope(Dispatchers.IO).coroutineContext) {
            jda.getGuildChannelById(channelId)?.type
        }
}