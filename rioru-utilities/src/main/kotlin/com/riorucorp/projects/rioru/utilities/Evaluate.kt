package com.riorucorp.projects.rioru.utilities

import javax.script.Compilable
import javax.script.ScriptEngine
import javax.script.ScriptEngineManager

object Evaluate {
    val engine: ScriptEngine = ScriptEngineManager().getEngineByExtension("kts")
    fun compile(str: String): Boolean =
        try {
            (engine as Compilable).compile(str)
            true
        } catch (e: Exception) {
            throw RioruEvalException("Error: ${e.message}")
        }

    fun execute(str: String): Any? =
        try {
            engine.eval(str)
        } catch (e: Exception) {
            throw RioruEvalException("Execution Error: ${e.message}")
        }
}