package com.github.mrdrooxbr.rioru.utils

import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import java.net.URL

@Suppress("BlockingMethodInNonBlockingContext")
class KtorRequisition {
    companion object {
        suspend fun get(url: String): String {
            val client = HttpClient(CIO)
            val response: String = client.get(URL(url))
            client.close()

            return response
        }

        suspend fun post(url: String) {
            val client = HttpClient(CIO)
            val response: HttpResponse = client.post(URL(url))
            client.close()
        }
    }
}