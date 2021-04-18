package com.github.shadowb64.rioru

import com.github.shadowb64.rioru.utilities.Config.Companion.check
import net.dv8tion.jda.api.requests.GatewayIntent as Intent

fun main() {
    check()

    RioruClient(
        Intent.GUILD_MESSAGES, /* Intents vararg */
        Intent.GUILD_VOICE_STATES
    ).createBotInstance()
}