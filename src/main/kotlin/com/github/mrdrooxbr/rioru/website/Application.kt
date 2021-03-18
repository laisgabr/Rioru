package com.github.mrdrooxbr.rioru.website

import com.github.mrdrooxbr.rioru.website.css.indexCSS
import com.github.mrdrooxbr.rioru.website.html.html
import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import kotlinx.css.*
import org.json.JSONObject

class Application(config: JSONObject) {
    init {
        embeddedServer(Netty, port = config.getJSONObject("services").getJSONObject("dashboard").getInt("port")) {
            routing {
                // CSS Routes
                indexCSS() // Principal Route "/" CSS

                // HTML Routes
                html() // Principal Route "/"
                get("/invite") {
                    call.respondRedirect("https://discord.com/oauth2/authorize?client_id=${config.getJSONObject("client")["id"]}&scope=bot&permissions=8")
                }
            }
        }.start(wait = true)
    }

}
suspend inline fun ApplicationCall.respondCss(builder: CSSBuilder.() -> Unit) {
    this.respondText(CSSBuilder().apply(builder).toString(), ContentType.Text.CSS)
}