package com.github.mrdroox.projects

import com.github.mrdroox.projects.utilities.others.LoggerActivities
import com.github.mrdroox.projects.controllers.CommandManager
import com.github.mrdroox.projects.events.*
import com.github.mrdroox.projects.utilities.Config
import net.dv8tion.jda.api.entities.Activity.streaming
import net.dv8tion.jda.api.requests.GatewayIntent
import net.dv8tion.jda.api.sharding.DefaultShardManagerBuilder

class RioruClient {
    init {
        createInstance()
    }

    companion object {
        val cooldown = HashMap<String, Int>()
        private fun createInstance() {
            LoggerActivities.info("Starting load commands")
            CommandManager()
            LoggerActivities.success("All Commands Loaded with success")

            DefaultShardManagerBuilder.createDefault(
                Config.get("token"),
                GatewayIntent.GUILD_WEBHOOKS,
                GatewayIntent.GUILD_MESSAGE_TYPING,
                GatewayIntent.DIRECT_MESSAGE_TYPING,
                GatewayIntent.DIRECT_MESSAGES,
                GatewayIntent.GUILD_INVITES,
                GatewayIntent.GUILD_MEMBERS,
                GatewayIntent.GUILD_EMOJIS,
                GatewayIntent.GUILD_BANS,
                GatewayIntent.GUILD_MESSAGE_REACTIONS,
                GatewayIntent.GUILD_MESSAGES,
                GatewayIntent.GUILD_VOICE_STATES
            )
                .addEventListeners(
                    MessageCreateEvent(),
                    ClientReady(),
                    ShutdownEvent()
                ).setActivity(streaming("Sou feito em Kotlin 😎", "twitch.tv/mrgamingbr0001"))
                .build()
        }
    }
}
