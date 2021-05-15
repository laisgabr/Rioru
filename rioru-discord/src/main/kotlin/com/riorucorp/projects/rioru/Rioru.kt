package com.riorucorp.projects.rioru

import com.riorucorp.projects.rioru.commands.CommandManager
import com.riorucorp.projects.rioru.utilities.Config
import com.riorucorp.projects.rioru.utils.Listener
import org.javacord.api.DiscordApi
import org.javacord.api.DiscordApiBuilder
import org.javacord.api.entity.intent.Intent.*

object Rioru {
    lateinit var client: DiscordApi
    fun createMyInstance() {
        val listener = Listener()

        client = DiscordApiBuilder().also {
            with(it) {
                setToken(Config.getConfig("rioru-discord").getString("token"))
                setIntents(GUILD_VOICE_STATES, GUILDS, GUILD_INTEGRATIONS, GUILD_MESSAGES, GUILD_MEMBERS)
                setRecommendedTotalShards()
            }
        }.addListener(listener).login().join().also {
            CommandManager(it)
            listener.onReady(it)
        }
    }
}
