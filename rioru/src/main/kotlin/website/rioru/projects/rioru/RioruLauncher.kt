package website.rioru.projects.rioru

import website.rioru.projects.rioru.utils.FileAction
import website.rioru.projects.rioru.utils.commands.CommandLoader
import java.io.File

suspend fun main() {
    System.setProperty(
        "idea.use.native.fs.for.win",
        "false"
    )

    if (!File("../config.json").exists()) {
        println("Hi, my name is Rioru and i want to make the world a better place\nbut first, you need to put the settings in my config file \"config.json\".\nAfter doing that, run me again,\nsee you later :)")
        FileAction.writeFile(
            "../config.json", """
        {
           "discord": {
               "token": ""
           }
        }
        """.trimIndent()
        )
        kotlin.system.exitProcess(1)
    }

    CommandLoader()
    Rioru.createClient()
}