package com.github.shadowb64.rioru.utilities

import org.json.JSONObject
import java.io.File

class Config {
    companion object {
        fun getServicesConf() = JSONObject(RioruUtilities.readFile("./services.json"))
        fun getBotConf() = JSONObject(RioruUtilities.readFile("./discord.json"))
        fun check() {
            val botConfFile = File("./discord.json")
            val servicesConfFile = File("./services.json")
            if(!botConfFile.exists() && !servicesConfFile.exists()) {
                RioruUtilities.createFileAndWrite("./discord.json", """
            {
                "token": "",
                "id": "",
                "secret": "",
                "logs": {
                    "guildsID": "",
                    "paymentsID": "",
                    "logsID": ""
                }
            }
            """.trimIndent())
                RioruUtilities.createFileAndWrite("./services.json", """
            {
                "dashboard": {
                    "port": 8080,
                    "api": {
                       "secret": "",
                       "routeSecret": ""
                    }
                }
            }
            """.trimIndent())
                println("Hi, My name is Rioru c:")
                println("I want make the Discord a better place and the world too")
                println("But first, I need you to open the files(\"services.json\", \"discord.json\") I created for you and configure me")
                println("And rerun me\nSee you later :)")
            }
        }
    }
}