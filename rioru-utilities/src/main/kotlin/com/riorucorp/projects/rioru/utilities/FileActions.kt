package com.riorucorp.projects.rioru.utilities

import java.io.*

object FileActions {
    fun readFile(path: String): String {
        val reader = FileReader(File(path))
        val bufferedFile = BufferedReader(reader)
        var line = bufferedFile.readLine()
        var result = ""

        while (line != null) {
            result += "$line\n"
            line = bufferedFile.readLine()
        }

        return result
    }

    fun writeFile(path: String, content: String) {
        val writer = FileWriter(File(path.replace("/", "\\")))
        val printWriter = PrintWriter(writer)
        printWriter.printf(content).close()
        writer.close()
    }
}