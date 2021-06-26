package com.riorucorp.projects.rioru.utilities

import javax.script.Compilable
import javax.script.ScriptEngine
import javax.script.ScriptEngineManager

object Evaluate {
    val engine: ScriptEngine = ScriptEngineManager().getEngineByExtension("kts")
    fun compile(str: String): Boolean =
        try {
            System.setProperty(
                "idea.use.native.fs.for.win",
                "false"
            ) // Retirar mensagem de erro ao usar o eval no Windows
            (engine as Compilable).compile(str)
            true
        } catch (e: Exception) {
            throw Exception("Error: ${e.message}")
        }

    fun execute(str: String): Any? =
        try {
            System.setProperty(
                "idea.use.native.fs.for.win",
                "false"
            ) // Retirar mensagem de erro ao usar o eval no Windows
            engine.eval(str)
        } catch (e: Exception) {
            throw Exception("Execution Error: ${e.message}")
        }
}