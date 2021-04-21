package com.github.shadowb64.rioru

import com.github.shadowb64.rioru.utilities.Config.Companion.check
import net.dv8tion.jda.api.requests.GatewayIntent.*

fun main() {
    check()
    RioruClient(
        GUILD_MESSAGES, /* Intents vararg */
        GUILD_VOICE_STATES,
        GUILD_EMOJIS
    ).createBotInstance()
}