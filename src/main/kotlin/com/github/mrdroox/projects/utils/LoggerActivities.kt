package com.github.mrdroox.projects.utils

import java.time.LocalDateTime

import java.time.format.DateTimeFormatter

class LoggerActivities {
    companion object {
        @JvmStatic
        fun info(content: String) {
            println(format("\u001B[33m", content))
        }

        @JvmStatic
        fun success(content: String) {
            println(format("\u001B[32m", content))
        }

        @JvmStatic
        fun error(content: String) {
            println(format("\u001B[31m", content))
        }

        @JvmStatic
        private fun format(color: String, content: String): String {
            var dateFormatted = DateTimeFormatter.ofPattern("dd/MM/uuuu").format(LocalDateTime.now())
            var hourFormatted = DateTimeFormatter.ofPattern("HH:mm:ss").format(LocalDateTime.now())
            return "| [ $color$dateFormatted $hourFormatted\u001B[0m ]  $content"
        }
    }
}