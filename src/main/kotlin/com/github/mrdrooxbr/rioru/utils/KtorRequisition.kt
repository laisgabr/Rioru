package com.github.mrdrooxbr.rioru.utils

import io.ktor.client.HttpClient
import io.ktor.client.engine.cio.CIO

class KtorRequisition {
    companion object val client = HttpClient(CIO)
}