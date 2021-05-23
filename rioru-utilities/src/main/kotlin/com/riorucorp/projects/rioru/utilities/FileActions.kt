package com.riorucorp.projects.rioru.utilities

import java.io.*
import java.io.BufferedWriter
import java.io.FileWriter

object FileActions {
    fun readFile(path: String): String {
        val reader = FileReader(path)
        val bufferedFile = BufferedReader(reader)
        var line = bufferedFile.readLine()
        var result = ""

        while (line != null) {
            result += "$line\n"
            line = bufferedFile.readLine()
        }
        reader.close()
        bufferedFile.close()

        return result
    }

    fun writeFile(path: String, content: String) {
        val file = File(path)
        val fw = FileWriter(file.absoluteFile)
        val bw = BufferedWriter(fw)
        bw.write(content)
        bw.close()
    }
}