package com.github.mrdrooxbr.rioru.bot.rioruUtils

import com.github.mrdrooxbr.rioru.utils.LoggerActivities
import com.github.mrdrooxbr.rioru.utils.ClientRequests
import org.json.simple.JSONObject
import org.json.simple.parser.JSONParser

class RioruTranslates {
    fun get(Locale: String, FileName: String, ObjectName: String?): JSONObject? {
        val request =
            ClientRequests().build(
                "get",
                "https://raw.githubusercontent.com/ZoeCorporation/ZoeLocales/main/$Locale/$FileName.json"
            )
        if(request!!.contains("404: Not Found")) return null
        return try {
            val toObj = JSONParser().parse(request) as Any
            val json = toObj as JSONObject
            json[ObjectName] as Any as JSONObject
        } catch (e: Exception) {
            LoggerActivities.error("Cannot get any locale file")
            null
        }
    }
}