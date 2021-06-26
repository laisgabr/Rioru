package com.riorucorp.projects.rioru

import com.riorucorp.projects.rioru.managers.natsu.NatsuShardManager
import com.riorucorp.projects.rioru.utilities.Config
import com.riorucorp.projects.rioru.utils.Listener
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.launch
import net.dv8tion.jda.api.JDA
import net.dv8tion.jda.api.JDABuilder
import net.dv8tion.jda.api.requests.GatewayIntent.*
import net.dv8tion.jda.api.utils.ChunkingFilter
import net.dv8tion.jda.api.utils.MemberCachePolicy

object Rioru {
    lateinit var instance: JDA
    lateinit var natsuShardManager: NatsuShardManager
    suspend fun createMyInstance() {
        coroutineScope {
            launch {
                JDABuilder.createDefault(
                    Config.getConfig("rioru-discord").getString("token"),
                    GUILD_MEMBERS,
                    GUILD_MESSAGES,
                    GUILD_VOICE_STATES
                ).also {
                    with(it) {
                        addEventListeners(Listener())
                        setChunkingFilter(ChunkingFilter.ALL)
                        setMemberCachePolicy(MemberCachePolicy.ALL)
                        useSharding(0, Config.getConfig("rioru-discord").getInt("shards"))
                        setAutoReconnect(true)
                    }
                }.build().also {
                    instance = it
                    natsuShardManager = NatsuShardManager(it)
                }
            }
        }
    }
}