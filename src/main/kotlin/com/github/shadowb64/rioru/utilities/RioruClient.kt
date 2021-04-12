package com.github.shadowb64.rioru.utilities

import com.github.shadowb64.rioru.managers.CommandManager
import net.dv8tion.jda.api.requests.GatewayIntent
import net.dv8tion.jda.api.sharding.DefaultShardManagerBuilder

class RioruClient(private vararg val intents: GatewayIntent) {
    fun createBotInstance() {
        CommandManager()
        RioruUtilities.botInstance = DefaultShardManagerBuilder.createDefault(
            Config.getBotConf().getString("token"),
            GatewayIntent.GUILD_MEMBERS,
            *intents
        ).addEventListeners(JDAEventsListener()).build()
    }
}