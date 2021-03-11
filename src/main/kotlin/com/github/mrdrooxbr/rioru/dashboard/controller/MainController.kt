package com.github.mrdrooxbr.rioru.dashboard.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import java.io.BufferedReader
import java.io.File
import java.io.FileReader

@Suppress("SameParameterValue")
@RestController
class MainController {
    @GetMapping(path = ["/"])
    fun start(): String {
        return read("index")
    }


    private fun read(filename: String): String {
        var value= """
            <!DOCTYPE html> 
            <head>
            
            </head>
        """.trimIndent()

        val path = "./src/main/kotlin/com/github/rioru/dashboard/view/$filename.html"

        val file = FileReader(File(path))
        val buffer = BufferedReader(file)
        var line = buffer.readLine()
        while (line !== null) {
            value += "${line}\n"
            line = buffer.readLine()
        }
        file.close()
        return value
    }
}