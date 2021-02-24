package com.github.mrdroox.projects.utilities.others

import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

class LoggerActivities {
    companion object {
        fun info(content: String) {
            println(format("\u001B[33m", content))
        }

        fun success(content: String) {
            println(format("\u001B[32m", content))
        }

        fun error(content: String) {
            println(format("\u001B[31m", content))
        }

        private fun format(color: String, content: String): String {
            val dateFormatted = DateTimeFormatter.ofPattern("dd/MM/uuuu").format(LocalDateTime.now())
            val hourFormatted = DateTimeFormatter.ofPattern("HH:mm:ss").format(LocalDateTime.now())
            return "| [ $color$dateFormatted $hourFormatted\u001B[0m ]  $content"
        }
    }
}