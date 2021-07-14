package website.rioru.projects.rioru.utils.commands

import website.rioru.projects.rioru.utils.Logger
import java.io.File

class CommandLoader {
    private val PATH = "./src/main/kotlin/website/rioru/projects/rioru/commands/"
    init {
        load()
    }

    private fun load() {
        val dirList =
            File(PATH).list { dir: File, _: String -> dir.isDirectory }
        if (dirList.isNullOrEmpty()) {
            Logger.error { "There is no package with command categories in the commands package, so it is impossible to load commands" }
            kotlin.system.exitProcess(1)
        }

        for(dir in dirList) {
            val commands = File("$PATH$dir/").list()?.filter { c -> c.contains(".kt") }
            if(commands.isNullOrEmpty()) {
                Logger.error { "Not have commands in \"$dir\" path" }
                kotlin.system.exitProcess(1)
            }

            for(cmd in commands) {
                val command: AbstractCommand = Class.forName("website.rioru.projects.rioru.commands.$dir.${cmd.replace(".kt", "")}").constructors[0].newInstance() as AbstractCommand
                CommandManager.addCommand(command)
            }
        }
    }
}