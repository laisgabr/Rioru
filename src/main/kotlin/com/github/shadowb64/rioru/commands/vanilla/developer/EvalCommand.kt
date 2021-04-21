package com.github.shadowb64.rioru.commands.vanilla.developer

import com.github.shadowb64.rioru.commands.AbstractCommand
import com.github.shadowb64.rioru.commands.CommandContext
import javax.script.ScriptEngine
import javax.script.ScriptEngineManager

class EvalCommand : AbstractCommand(
    name = "eval"
) {
    private var engine: ScriptEngine? = null

    init {
        engine = ScriptEngineManager().getEngineByName("nashorn")
    }

    override fun run(context: CommandContext) {
        if(context.messageEvent.author.id != "807305370480934923") {
            return
        }

        engine?.put("context", context)
        try {
            val output = engine?.eval(java.lang.String.join(" ", context.args))
            context.messageEvent.channel.sendMessage(
                "```md\n${
                    if (output.toString().length > 1970) output.toString().substring(0, 1970) else output
                }\n```"
            ).queue()
            return
        } catch (e: Exception) {
            context.messageEvent.channel.sendMessage("Saida: ${e.message}").queue()
            return
        }

    }
}