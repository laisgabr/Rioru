package com.riorucorp.projects.caramel

import com.riorucorp.projects.rioru.utilities.Evaluate
import com.riorucorp.projects.rioru.utilities.FileActions
import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*

object EngineViewer {
    fun render(filename: String, options: Map<String, Any> = mapOf("title" to "linda")): String {
        for (i in options) Evaluate.engine.put(i.key, i.value)
        var file = FileActions.readFile(filename)

        if (options.isNotEmpty()) {
            val templateArray = file.replace(Regex("(&nbsp;|<([^>]+)>|\n)"), "").split(" ")
            for (template in templateArray) {
                if (template.replace(" ", "") == "") {}
                else {
                    file = file.replace(
                        template,
                        Evaluate.execute("bindings[\"${template.replace("$(", "").replace(")$", "")}\"]")?.toString() ?: "ERROR IN VIEW ENGINE CAUSED BY VARIABLE NOT BE SET"
                    )
                }
            }

        }
        return file
    }
}

suspend fun ApplicationCall.send(filename: String, options: Map<String, Any> = mapOf()) {
    this.respondText(EngineViewer.render(filename, options), ContentType.Text.Html)
}
