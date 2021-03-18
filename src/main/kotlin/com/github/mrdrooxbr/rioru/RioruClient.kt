package com.github.mrdrooxbr.rioru

import com.github.mrdrooxbr.rioru.utils.LoggerActivities
import com.github.mrdrooxbr.rioru.bot.managers.CommandManager
import com.github.mrdrooxbr.rioru.bot.events.*
import net.dv8tion.jda.api.entities.Activity.streaming
import net.dv8tion.jda.api.requests.GatewayIntent
import net.dv8tion.jda.api.sharding.DefaultShardManagerBuilder
import org.json.JSONObject

class RioruClient(private val config: JSONObject) {
    init { createInstance() }

    private fun createInstance() {
        LoggerActivities.info("Starting load commands")
        CommandManager()
        LoggerActivities.success("All Commands Loaded with success")

        DefaultShardManagerBuilder.createDefault(
            config.getJSONObject("client").getString("token"),
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
        ).setActivity(streaming("OWO", null))
        .build()
    }
}
