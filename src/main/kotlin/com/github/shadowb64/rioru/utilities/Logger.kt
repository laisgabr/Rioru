package com.github.shadowb64.rioru.utilities

import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

class Logger {
    companion object {
        private fun log(color: String = "", content: Any) {
            val dateFormatted = DateTimeFormatter.ofPattern("dd/MM/uuuu").format(LocalDateTime.now())
            val hourFormatted = DateTimeFormatter.ofPattern("HH:mm:ss").format(LocalDateTime.now())
            println("| [ $dateFormatted $hourFormatted ] $color${content}\u001B[0m ")

            RioruUtilities.writeFile("./logs/today.txt", "[ $dateFormatted $hourFormatted ] $content")
        }

        fun debug(content: () -> Any) = log("\u001B[33m", "[ DEBUG ] ${content.invoke()}")
        fun warn(content: () -> Any) = log("\u001B[36m", "[ WARN ] ${content.invoke()}")
        fun info(content: () -> Any) = log("\u001B[37m", "[ INFO ] ${content.invoke()}")
        fun error(content: () -> Any) = log("\u001B[31m", "[ ERROR ] ${content.invoke()}")
        fun success(content: () -> Any) = log("\u001B[32m", "[ SUCCESS ] ${content.invoke()}")
        fun command(content: () -> Any) = log(content = "[ COMMANDS ] ${content.invoke()}")
        fun managers(content: () -> Any) = log(content = "[ MANAGERS ] ${content.invoke()}")
    }
}