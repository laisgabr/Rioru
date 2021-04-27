package com.github.shadowb64.rioru.utilities

@Suppress("unused")
class Logger {
    companion object {
        private fun log(color: String = "", content: () -> Any) = println("$color${content.invoke()}\u001B[0m ")
        fun debug(content: () -> Any) = log("\u001B[33m") { "[ DEBUG ] ${content.invoke()}" }
        fun warn(content: () -> Any) = log("\u001B[36m") { "[ WARN ] ${content.invoke()}" }
        fun info(content: () -> Any) = log("\u001B[37m") { "[ INFO ] ${content.invoke()}" }
        fun error(content: () -> Any) = log("\u001B[31m") { "[ ERROR ] ${content.invoke()}" }
        fun success(content: () -> Any) = log("\u001B[32m") { "[ SUCCESS ] ${content.invoke()}" }
        fun command(content: () -> Any) = log { "[ COMMANDS ] ${content.invoke()}" }
        fun managers(content: () -> Any) = log { "[ MANAGERS ] ${content.invoke()}" }
    }
}