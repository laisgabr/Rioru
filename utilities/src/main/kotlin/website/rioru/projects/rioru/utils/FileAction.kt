package website.rioru.projects.rioru.utils

import java.io.*

object FileAction {
    fun readFile(filename: String): String {
        val buffer = BufferedReader(FileReader(File("../$filename").absoluteFile))
        var lineContent = buffer.readLine()
        var result = ""

        while(lineContent != null) {
            result += "$lineContent\n"
            lineContent = buffer.readLine()
        }

        return result
    }

    fun writeFile(path: String, content: String) =
        BufferedWriter(FileWriter(File(path).absoluteFile)).also {
            it.write(content)
        }.close()
}