package com.github.shadowb64.rioru

import com.github.shadowb64.rioru.utilities.Config
import com.github.shadowb64.rioru.utilities.RioruClient
import com.github.shadowb64.rioru.website.WebsiteApplication
import net.dv8tion.jda.api.requests.GatewayIntent

fun main() {
    Config.check()
    WebsiteApplication()
    RioruClient(
        GatewayIntent.GUILD_MESSAGES // Intents vararg
    )
}