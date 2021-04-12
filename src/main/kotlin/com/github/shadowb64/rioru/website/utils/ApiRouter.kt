package com.github.shadowb64.rioru.website.utils

import com.github.shadowb64.rioru.utilities.Config
import io.ktor.application.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.*

fun Route.api() {
    route("/api") {
        route("/v1") {

        }

        route("/v2") {
            get {
                val header = call.request.header("Authorization")
                if(header === null) call.respondText("\"{\"\n\"message\": \"Esqueceu de nada não? rsrs\",\n\"code\": 401\n\"}\"")
                if(header !== Config.getServicesConf().getJSONObject("dashboard").getJSONObject("api").getString("secret")) call.respondText("\"{\"\n\"message\": \"Tá tudo certo msm? rsrs\",\n\"code\": 401\n\"}\"")
            }

            post {
                val header = call.request.header("Authorization")
                if(header === null) call.respondText("\"{\"\n\"message\": \"Esqueceu de nada não? rsrs\",\n\"code\": 401\n\"}\"")
                if(header !== Config.getServicesConf().getJSONObject("dashboard").getJSONObject("api").getString("secret")) call.respondText("\"{\"\n\"message\": \"Tá tudo certo msm? rsrs\",\n\"code\": 401\n\"}\"")
            }
        }
    }
}