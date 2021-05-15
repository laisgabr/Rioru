package com.riorucorp.projects.rioru.utilities

import javax.script.Compilable
import javax.script.ScriptEngine
import javax.script.ScriptEngineManager

object Evaluate {
    val engine: ScriptEngine = ScriptEngineManager().getEngineByExtension("kts")
    fun compile(parameters: Map<String, Any?>, str: String): Boolean {
        for (param in parameters) engine.put(param.key, param.value)
        return try {
            (engine as Compilable).compile(str)
            true
        } catch (e: Exception) {
            throw RioruEvalException("Error: ${e.message}")
        }
    }

    fun execute(parameters: Map<String, Any?>, str: String) {
        for (parameter in parameters) engine.put(parameter.key, parameter.value)
        try {
            engine.eval(str)
        } catch (e: Exception) {
            throw RioruEvalException("Execution Error: ${e.message}")
        }
    }
}