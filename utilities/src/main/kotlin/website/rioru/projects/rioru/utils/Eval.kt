package website.rioru.projects.rioru.utils

import javax.script.Compilable
import javax.script.ScriptContext
import javax.script.ScriptEngine
import javax.script.ScriptEngineManager

object Eval {
    var engine: ScriptEngine = ScriptEngineManager().getEngineByExtension("kts")

    object Parameters {
        fun clear() {
            engine = ScriptEngineManager().getEngineByExtension("kts")
        }

        fun add(key: String, value: Any) = engine.context.setAttribute(key, value, ScriptContext.GLOBAL_SCOPE)
        fun remove(key: String) = engine.context.removeAttribute(key, ScriptContext.GLOBAL_SCOPE)
    }

    fun compile(code: String): Boolean =
        try {
            (engine as Compilable).compile(code)
            true
        } catch (e: Exception) {
            throw Exception("Error: ${e.message}")
        }

    fun eval(code: String): Any =
        try {
            engine.eval(code)
        } catch (e: Exception) {
            throw Exception("Execution Error: ${e.message}")
        }
}