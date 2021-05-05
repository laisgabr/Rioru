package com.github.shadowb64.rioru.utilities

import org.json.JSONObject
import java.io.BufferedReader
import java.io.FileReader
import java.io.FileWriter
import java.io.PrintWriter
import java.io.File

class RioruUtilities {
    companion object {
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

        fun writeFile(file: String, content: String) {
            val f = FileWriter(file)
            val writer = PrintWriter(file).printf(content)
            f.close()
            writer.close()
        }
    }
}

fun String.replacePlaceholders(map: Map<String, Any>): String {
    if (map.isEmpty()) return this
    var e = this
    for (c in map) {
        e = e.replace("<<${c.key}>>", c.value.toString())
    }

    return e
}

fun String.json() = JSONObject(this)
