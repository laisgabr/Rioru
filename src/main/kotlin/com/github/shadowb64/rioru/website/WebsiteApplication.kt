package com.github.shadowb64.rioru.website

import com.github.shadowb64.rioru.utilities.Config
import com.github.shadowb64.rioru.website.utils.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*

class WebsiteApplication {
    init {
        embeddedServer(Netty, port = Config.getServicesConf().getJSONObject("dashboard").getInt("port")) {
           routing {
               api() // API Routes (v1 and v2)
               stylesheet() // CSS Routes
               html() // HTML Routes
           }
        }.start(wait = true)
    }
}