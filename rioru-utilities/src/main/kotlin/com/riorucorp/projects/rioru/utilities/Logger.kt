package com.riorucorp.projects.rioru.utilities

object Logger {
    private fun log(content: Any) {
        val date = Formatter.formatDate("dd/MM/uuuu")
        val hour = Formatter.formatDate("HH:mm:ss")
        println("| $date $hour | $content\u001B[0m")
    }

    fun debug(content: () -> Any) = log("DEBUG " + content.invoke())
    fun warn(content: () -> Any) = log("WARN " + content.invoke())
    fun info(content: () -> Any) = log("INFO " + content.invoke())
    fun error(content: () -> Any) = log("ERROR " + content.invoke())
}