package com.github.shadowb64.rioru.utilities

@Suppress("unused")
class Logger {
    companion object {
        private fun log(color: String = "", content: () -> String) = println("$color| ${content.invoke()}\u001B[0m ")
        fun debug(content: () -> String) = log("\u001B[33m") { "[ DEBUG ] ${content.invoke()}" }
        fun warn(content: () -> String) = log("\u001B[36m") { "[ WARN ] ${content.invoke()}" }
        fun info(content: () -> String) = log("\u001B[37m") { "[ INFO ] ${content.invoke()}" }
        fun error(content: () -> String) = log("\u001B[31m") { "[ ERROR ] ${content.invoke()}" }
        fun success(content: () -> String) = log("\u001B[32m") { "[ SUCCESS ] ${content.invoke()}" }
        fun command(content: () -> String) = log { "[ COMMANDS ] ${content.invoke()}" }
        fun managers(content: () -> String) = log { "[ MANAGERS ] ${content.invoke()}" }
    }
}