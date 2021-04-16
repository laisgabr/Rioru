package com.github.shadowb64.rioru

import com.github.shadowb64.rioru.utilities.Logger
import net.dv8tion.jda.api.requests.GatewayIntent as Intent
import com.github.shadowb64.rioru.utilities.Config.Companion.check

fun main() {
    check()

    RioruClient(
        Intent.GUILD_MESSAGES /* Intents vararg */
    ).createBotInstance()
}