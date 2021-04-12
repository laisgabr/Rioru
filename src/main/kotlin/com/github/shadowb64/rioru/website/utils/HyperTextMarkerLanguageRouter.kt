package com.github.shadowb64.rioru.website.utils

import com.github.shadowb64.rioru.website.html.*
import io.ktor.routing.*

fun Route.html() {
    index() // "/"
    notFound()
    invite()
}