package com.github.shadowb64.rioru.utilities

import com.github.shadowb64.rioru.Rioru

object RioruAPIRequester {
    private val conf = Rioru.getServicesConf().getJSONObject("apiJavaScript")
    val BASE_URL = "${conf.getString("hostname")}:${conf.getInt("port")}"
    fun get(route: String, data: Map<String, String>) =
        khttp.get(
            BASE_URL + route,
            headers = mapOf("authorization" to conf.getString("secret")),
            data = data
        ).jsonObject

    fun post(route: String, data: Map<String, String>) =
        khttp.post(
            BASE_URL + route,
            headers = mapOf("authorization" to conf.getString("secret")),
            data = data
        ).jsonObject
}