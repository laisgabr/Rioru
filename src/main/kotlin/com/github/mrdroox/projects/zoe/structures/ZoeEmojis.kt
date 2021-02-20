package com.github.mrdroox.projects.zoe.structures

import org.json.simple.JSONObject

class ZoeEmojis {
    companion object {
        fun get(emojiName: String): String? {
            val json = JSONObject()

            val filter =  json.filter { c -> c.key === emojiName }
            return if(filter.isEmpty()) {
                null
            } else {
                filter[0].toString()
            }
        }
    }
}