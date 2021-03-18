package com.github.mrdrooxbr.rioru.website.css

import com.github.mrdrooxbr.rioru.website.respondCss
import io.ktor.application.*
import io.ktor.routing.*
import kotlinx.css.*

fun Route.indexCSS() {
    get("/files/css/index.css") {
        call.respondCss {
            rule("body") {
                backgroundColor = Color("#141313")
            } // sistema de classes no css
        }
    }
}
