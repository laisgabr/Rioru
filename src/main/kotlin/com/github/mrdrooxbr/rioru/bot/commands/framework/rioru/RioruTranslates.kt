package com.github.mrdrooxbr.rioru.bot.commands.framework.rioru

import org.json.JSONObject
import java.io.BufferedReader
import java.io.FileReader
import java.io.File

class RioruTranslates {
    fun get(Locale: String, Filename: String): JSONObject {
        val file = FileReader(File("./Locales/${Locale}/${Filename}.json"))
        val buffer = BufferedReader(file)

        var finalValue = ""
        var line = buffer.readLine()
        while(line !== null) {
            finalValue += line
            line = buffer.readLine()
        }
        
        return JSONObject(finalValue)
    }
}