package com.github.mrdroox.projects.zoe

import com.github.mrdroox.projects.utils.LoggerActivities
import com.github.mrdroox.projects.zoe.controllers.CommandManager
import com.github.mrdroox.projects.zoe.events.MessageCreateEvent
import com.github.mrdroox.projects.zoe.events.ZoeClientReady
import net.dv8tion.jda.api.JDABuilder
import net.dv8tion.jda.api.entities.Activity
import net.dv8tion.jda.api.requests.GatewayIntent

class ZoeClient {
    init {
        createZoeInstance()
    }

    companion object {
        private fun createZoeInstance() {
            LoggerActivities.info("Starting load commands")
            CommandManager()
            LoggerActivities.success("All Commands Loaded with success")

            JDABuilder.createDefault(
                Config.get("zoe_token"),
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
                .setActivity(Activity.streaming("Sou feita em Kotlin e Java 😎", "twitch.tv/zoe"))
                .addEventListeners(
                    MessageCreateEvent(),
                    ZoeClientReady()
                )//.setShardsTotal(Integer.parseInt(Config.get("shards")))
                .build()
        }
    }
}