package com.riorucorp.projects.riorubot

import com.riorucorp.projects.riorubot.utils.Listener
import com.riorucorp.projects.riorubot.utils.RioruUtils
import org.javacord.api.DiscordApi
import org.javacord.api.DiscordApiBuilder
import org.javacord.api.entity.intent.Intent.*

fun main() = Rioru.main()

object Rioru {
    lateinit var client: DiscordApi
    fun main() {
        val listener = Listener()
        client = DiscordApiBuilder().also {
            with(it) {
                setToken(RioruUtils.Config.getDiscord().getString("token"))
                setIntents(GUILD_VOICE_STATES, GUILDS, GUILD_INTEGRATIONS, GUILD_MESSAGES, GUILD_MEMBERS)
                setRecommendedTotalShards()
            }
        }.addListener(listener).login().join()
            .also { listener.onReady(it) }
    }
}