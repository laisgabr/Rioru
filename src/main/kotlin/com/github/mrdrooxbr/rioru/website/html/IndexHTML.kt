package com.github.mrdrooxbr.rioru.website.html

import io.ktor.application.*
import io.ktor.html.*
import io.ktor.routing.*
import kotlinx.html.*

fun Route.html() {
    get("/") {
        call.respondHtml {
            head {
                title {
                    +"Rioru Website"
                }
                link(rel = "stylesheet", href = "/files/css/index.css", type = "text/css")
            }

            body {
                p {
                    +"toma"
                 br {}
                    +"awa"
                }
            }
        }
    }
}