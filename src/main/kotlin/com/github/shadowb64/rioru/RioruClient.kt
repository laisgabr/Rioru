package com.github.shadowb64.rioru

import com.github.shadowb64.rioru.managers.CommandManager
import com.github.shadowb64.rioru.utilities.Config
import com.github.shadowb64.rioru.utilities.JDAEventsListener
import com.github.shadowb64.rioru.utilities.RioruUtilities
import net.dv8tion.jda.api.requests.GatewayIntent
import net.dv8tion.jda.api.sharding.DefaultShardManagerBuilder
import net.dv8tion.jda.api.utils.ChunkingFilter
import net.dv8tion.jda.api.utils.MemberCachePolicy

class RioruClient(private vararg val intents: GatewayIntent) {
    fun createBotInstance() {
        val commandManager = CommandManager()
        RioruUtilities.botInstance = DefaultShardManagerBuilder.createDefault(
            Config.getBotConf().getString("token"),
            GatewayIntent.GUILD_MEMBERS,
            *intents
        ).also {
            with(it) {
                addEventListeners(JDAEventsListener())
                setChunkingFilter(ChunkingFilter.ALL)
                setMemberCachePolicy(MemberCachePolicy.ALL)
            }
        }.build()
    }
}