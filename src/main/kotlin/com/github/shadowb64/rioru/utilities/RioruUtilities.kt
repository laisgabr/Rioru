package com.github.shadowb64.rioru.utilities

import mu.KotlinLogging
import net.dv8tion.jda.api.sharding.ShardManager
import java.io.*

class RioruUtilities {
    companion object {
        val logger = KotlinLogging.logger {  }
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

        fun createFileAndWrite(file: String, content: String) {
            val file = FileWriter(file)
            val writer = PrintWriter(file)
            writer.printf(content)
            file.close(); writer.close()
        }
    }
}