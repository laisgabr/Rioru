package com.github.mrdrooxbr.rioru.utils

import org.json.JSONObject
import java.io.BufferedReader
import java.io.File
import java.io.FileReader
import kotlin.system.exitProcess

class Config {
    private val file = File("./rioru.json")
    init {
        if(!file.exists()) {
            LoggerActivities.info("Hello, My name is Rioru")
            LoggerActivities.info("You need to configure me using the file rioru.json")
            LoggerActivities.info("After setting up, run me again.\n" +
                    "See you later")
            exitProcess(1)
        }
    }

    private fun get(): String {
        val reader = FileReader(file)
        val buffer = BufferedReader(reader)
        var json = ""
        var line = buffer.readLine()

        while(line !== null) { json += line; line = buffer.readLine() }
        return json
    }

    fun getConfigs(): JSONObject = JSONObject(get())
}