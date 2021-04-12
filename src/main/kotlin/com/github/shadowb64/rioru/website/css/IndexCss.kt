package com.github.shadowb64.rioru.website.css

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*
import io.ktor.routing.*
import kotlinx.css.*

fun Route.indexCss() {
    get("/index.css") {
        call.respondCss {
            rule("body") {
                backgroundColor = Color("#141313")
            }

            rule("button") {
                alignContent = Align.center
            }
        }
    }
}

suspend inline fun ApplicationCall.respondCss(builder: CSSBuilder.() -> Unit) {
    this.respondText(CSSBuilder().apply(builder).toString(), ContentType.Text.CSS)
}