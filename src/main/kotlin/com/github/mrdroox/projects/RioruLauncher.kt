package com.github.mrdroox.projects

import com.github.mrdroox.projects.utilities.others.LoggerActivities
import java.io.File
import kotlin.system.exitProcess

fun main() {
    val file = File("./.env")
    if(!file.exists()) {
        LoggerActivities.error("You need create a .env with environments variables")
        exitProcess(1)
    }

    try {
        RioruClient()
    } catch (e: Exception) {
        LoggerActivities.error("Rioru Client Error: ${e.message}")
        exitProcess(1)
    }
}