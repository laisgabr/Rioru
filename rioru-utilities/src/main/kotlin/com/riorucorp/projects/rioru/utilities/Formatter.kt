package com.riorucorp.projects.rioru.utilities

import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

object Formatter {
    fun formatDate(pattern: String) =
        DateTimeFormatter.ofPattern(pattern).format(LocalDateTime.now())
}