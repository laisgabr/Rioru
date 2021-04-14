package com.github.shadowb64.rioru.website.utils

import com.github.shadowb64.rioru.website.css.indexCss
import io.ktor.routing.*

fun Route.stylesheet() {
    route("/files/css") {
        indexCss() // "/index.css"
    }
}