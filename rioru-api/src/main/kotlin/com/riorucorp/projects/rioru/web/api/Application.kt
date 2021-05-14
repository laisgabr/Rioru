package com.riorucorp.projects.rioru.web.api

import com.fasterxml.jackson.databind.SerializationFeature
import io.ktor.application.*
import io.ktor.features.*
import io.ktor.http.*
import io.ktor.jackson.*
import io.ktor.response.*
import io.ktor.routing.

fun main() {
    io.ktor.server.netty.Engine.main(args)
}

fun Application.module() {
    routing {
        install(ContentNegotiation) {
            jackson {
                enable(SerializationFeature.INDENT_OUTPUT)
            }
        }

        get {
            call.respondText(mapOf("" to ""))
        }
    }
}