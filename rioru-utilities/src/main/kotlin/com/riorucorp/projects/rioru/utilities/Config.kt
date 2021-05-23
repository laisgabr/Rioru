package com.riorucorp.projects.rioru.utilities

import org.json.JSONObject
import java.io.FileNotFoundException
import kotlin.system.exitProcess

object Config {
    fun getConfig(file: String): JSONObject {
        try {
            return JSONObject(FileActions.readFile("./configs/$file.json"))
        } catch (e: FileNotFoundException) {
            FileActions.writeFile(
                "configs/$file.json", """
            { 
                "token": ""
            }""".trimIndent()
            )
            println("My name is Rioru")
            println("I want make the world a better place but before, you need configure the files of \"configs\" Folder")
            println("Then you execute me again")
            println("See you again later :)")
            exitProcess(1)
        }
    }
}