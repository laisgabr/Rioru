package com.github.mrdroox.projects.utils

/**
 * @author MysteryMS
 * @description The codes in this file belong to MysteryMS, we had the consent of the author of the code to use it.
 * Repository File: https://github.com/MysteryMS/Meteora/blob/master/src/main/kotlin/com/mystery/meteora/controller/Request.kt
 */

import okhttp3.FormBody
import okhttp3.OkHttpClient

class ClientRequests {
    private val client = OkHttpClient().newBuilder()
    private var request = okhttp3.Request.Builder()
    private val headers: MutableList<String> = mutableListOf()
    private val bodies: MutableList<String> = mutableListOf()
    private val formBody = FormBody.Builder()

    fun setHeaders(vararg headers: String): ClientRequests {
        for (item in headers) {
            this.headers.add(item)
        }
        return this
    }

    fun setBodies(vararg bodyParam: String): ClientRequests {
        for (item in bodyParam) {
            this.bodies.add(item)
        }
        return this
    }

    fun build(method: String, url: String): String? {
        for (item in headers) {
            val i = item.split(":")
            this.request.addHeader(i[0], i[1].trim())
        }

        for (item in bodies) {
            val i = item.split(":")
            formBody.add(i[0], i[1].trim())
        }
        request.url(url)

        if (method.toLowerCase() == "get") {
            request.get()
        } else {
            request.post(formBody.build())
        }

        return client.build().newCall(this.request.build()).execute().body?.string()
    }
}
