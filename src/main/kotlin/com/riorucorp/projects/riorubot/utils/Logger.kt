package com.riorucorp.projects.riorubot.utils

import java.io.File

object Logger {
    private fun log(content: Any) {
        val date = RioruUtils.Formatter.formatDate("dd/MM/uuuu")
        val hour = RioruUtils.Formatter.formatDate("HH:mm:ss")
        println("| $date $hour | $content\u001B[0m")
        val dateWithoutCharter = date.replace("/", "")
        val logFile = File("./logs/logs_$dateWithoutCharter.txt")
        if (!logFile.exists())
            RioruUtils.File.writer("./logs/logs_$dateWithoutCharter.txt", "| $date $hour | $content\n")
        else
            RioruUtils.File.writer("./logs/logs_$dateWithoutCharter.txt", "\n| $date $hour | $content")
    }

    fun debug(content: () -> Any) = log("DEBUG " + content.invoke())
    fun warn(content: () -> Any) = log("WARN " + content.invoke())
    fun info(content: () -> Any) = log("INFO " + content.invoke())
    fun error(content: () -> Any) = log("ERROR " + content.invoke())
}