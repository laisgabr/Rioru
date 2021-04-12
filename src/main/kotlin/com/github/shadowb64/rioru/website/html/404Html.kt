package com.github.shadowb64.rioru.website.html

import io.ktor.application.*
import io.ktor.html.*
import io.ktor.routing.*
import kotlinx.html.*

fun Route.notFound() {
    get("*") {
        call.respondHtml {
            body {
                h1 {
                    +""
                }
            }
        }
    }
}