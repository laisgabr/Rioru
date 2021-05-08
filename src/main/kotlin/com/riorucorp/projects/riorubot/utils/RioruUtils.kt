package com.riorucorp.projects.riorubot.utils

import org.json.JSONObject
import java.io.*
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

object RioruUtils {
    object File {
        fun reader(file: String): String {
            val readder = FileReader(file)
            val buffer = BufferedReader(readder)
            var line = buffer.readLine()
            var result = ""

            while (line !== null) {
                result += line + "\n"
                line = buffer.readLine()
            }

            return result
        }

        fun writer(file: String, content: String) {
            val fWriter = FileWriter(File(file))
            val writer = PrintWriter(file).printf(content)
            writer.close()
            fWriter.close()
        }
    }

    object Config {
        fun getDiscord(): JSONObject = JSONObject(File.reader("/discord.json"))
        fun getServices(): JSONObject = JSONObject(File.reader("/services.json"))
        fun getClient(): JSONObject = JSONObject(File.reader("/client.json"))
    }

    object Formatter {
        fun formatDate(pattern: String): String = DateTimeFormatter.ofPattern(pattern).format(LocalDateTime.now())
    }
}
