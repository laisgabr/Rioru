package com.github.mrdrooxbr.rioru.bot.commands.framework.rioru

class RioruEmojis {
    companion object {
        private val emojis = HashMap<String, String>()
        fun get(name: String): String? = try { emojis[name] } catch (e: Exception) { ":$name:" }
    }
}