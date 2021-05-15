package com.riorucorp.projects.rioru.utilities

import org.json.JSONObject
import java.io.File
import kotlin.system.exitProcess

object Config {
    private var configsVerified = false
    private fun verifyConfigFiles() {
        if(!verifyFile("rioru-discord")) {
            FileActions.writeFile("./configs/rioru-discord.json", """
            {
                "token": ""
            }
            """.trimIndent())
            println("My name is Rioru")
            println("I want make the world a better place but before, you need configure the files of \"Configs\" Folder")
            println("Then you execute me again")
            println("See you again later :)")
            exitProcess(1)
        }
    }

    private fun verifyFile(filename: String) =
        File("./configs/$filename.json").exists()

    fun getConfig(file: String): JSONObject {
        if(!configsVerified) {
            configsVerified = true
            verifyConfigFiles()
        }

        return JSONObject(FileActions.readFile("./configs/$file.json"))
    }
}