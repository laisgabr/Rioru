package com.github.shadowb64.rioru

import net.dv8tion.jda.api.requests.GatewayIntent.*

fun main() {
    Rioru.createMyInstance(GUILD_MESSAGES, /* Intents vararg */GUILD_VOICE_STATES, GUILD_EMOJIS)
}