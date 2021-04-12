package com.github.shadowb64.rioru.website.html

import io.ktor.application.*
import io.ktor.response.*
import io.ktor.routing.*

fun Route.invite(id: String = "815732961987002428", permission: Int = 1882582230) {
    get("/invite") {
        call.respondRedirect("https://discord.com/api/oauth2/authorize?client_id=$id&permissions=$permission&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2F&scope=bot")
    }
}