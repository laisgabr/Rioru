package com.github.shadowb64.rioru.website.html

import io.ktor.application.*
import io.ktor.html.*
import io.ktor.routing.*
import kotlinx.html.*

fun Route.index() {
    get("/") {
        call.respondHtml {
            head {
                link(rel = "stylesheet", href = "/files/css/index.css", type = "text/css")
            }

            body {
                a(href = "/invite") {
                    button {
                        +"Invite"
                    }
                }

            }
        }
    }
}