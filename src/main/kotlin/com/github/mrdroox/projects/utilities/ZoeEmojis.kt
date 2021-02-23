package com.github.mrdroox.projects.utilities

import org.json.simple.JSONObject

class ZoeEmojis {
    companion object {
        private val json = JSONObject()
        fun get(emojiName: String): String? {
            val filter = json.filter { c -> c.key === emojiName }
            return if(filter.isEmpty()) {
                null
            } else {
                filter[0].toString()
            }
        }
    }
}