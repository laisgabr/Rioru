package website.rioru.projects.rioru.utils

import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

object Formatter {
    fun formatDate(pattern: String): String =
        DateTimeFormatter.ofPattern(pattern).format(LocalDateTime.now())
}