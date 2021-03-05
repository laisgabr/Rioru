package com.github.mrdrooxbr.rioru.utils.apis

/*
Repository File:
https://github.com/MrDrooxBR/UsagiAPISimple/blob/main/lib/src/main/kotlin/com/github/mrdroox/projects/usagiapi/UsagiAPIClient.kt
 */

import com.github.mrdrooxbr.rioru.utils.ClientRequests
import org.json.simple.JSONObject
import org.json.simple.parser.JSONParser

class UsagiAPI {
    private val parser = JSONParser()
    fun dance(): String {
        return get("dance")
    }

    fun feed(): String {
        return get("feed")
    }

    fun hug(): String {
        return get("hug")
    }

    fun kiss(): String {
        return get("kiss")
    }

    fun pat(): String {
        return get("pat")
    }

    fun poke(): String {
        return get("poke")
    }

    fun slap(): String {
        return get("slap")
    }

    fun tickle(): String {
        return get("tickle")
    }

    private fun get(endpoint: String): String {
        val returned = parser.parse(ClientRequests().build("get", "https://usagiapi.danielagc.repl.co/api/$endpoint")) as Any as JSONObject
        return returned["url"] as String
    }
}