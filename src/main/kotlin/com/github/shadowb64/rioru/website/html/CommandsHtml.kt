package com.github.shadowb64.rioru.website.html

import com.github.shadowb64.rioru.commands.framework.CommandCategory
import com.github.shadowb64.rioru.managers.CommandManager
import io.ktor.application.*
import io.ktor.html.*
import io.ktor.routing.*
import kotlinx.html.*

fun Route.commands() {
    route("/commands") {
        get("/") {

        }

        get("/moderation") {

        }

        get("/utils") {
            call.respondHtml {
                body {
                    +CommandManager.commands.filter { c -> c.category === CommandCategory.UTILS }.toString()
                }
            }
        }
    }
}