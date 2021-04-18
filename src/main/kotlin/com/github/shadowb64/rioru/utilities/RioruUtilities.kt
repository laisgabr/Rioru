package com.github.shadowb64.rioru.utilities

import net.dv8tion.jda.api.sharding.ShardManager
import org.json.JSONObject
import java.io.BufferedReader
import java.io.FileReader
import java.io.FileWriter
import java.io.PrintWriter

class RioruUtilities {
    companion object {
        lateinit var botInstance: ShardManager
        fun readFile(file: String): String {
            val reader = FileReader(file)
            val buffer = BufferedReader(reader)
            var value = ""
            var line = buffer.readLine()

            while (line !== null) {
                value += "$line\n"
                line = buffer.readLine()
            }

            return value
        }

        @Suppress("NAME_SHADOWING")
        fun createFileAndWrite(file: String, content: String) {
            val file = FileWriter(file)
            val writer = PrintWriter(file)
            writer.printf(content)
            file.close(); writer.close()
        }
    }
}

fun String.replacePlaceholders(map: Map<String, String>): String {
    if (map.isEmpty()) return this
    var e = this

    for (c in map) {
        e = e.replace("<<${c.key}>>", c.value)
    }

    return e
}

fun String.json() = JSONObject(this)
