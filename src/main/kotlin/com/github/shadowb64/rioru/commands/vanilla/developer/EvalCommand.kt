package com.github.shadowb64.rioru.commands.vanilla.developer

import com.github.shadowb64.rioru.commands.caramel.AbstractCommand
import com.github.shadowb64.rioru.commands.caramel.CommandCategory
import com.github.shadowb64.rioru.commands.caramel.CommandContext
import javax.script.ScriptEngine
import javax.script.ScriptEngineManager

class EvalCommand : AbstractCommand(
    name = "eval",
    aliases = listOf("ev"),
    category = CommandCategory.DEVELOPER
) {
    private val engine: ScriptEngine = ScriptEngineManager().getEngineByName("nashorn")

    override fun run(context: CommandContext) {
        try {
            engine.put("context", context)
            engine.put("jda", context.jda)
            engine.put("usersSize", context.jda.users.size)
            engine.put("guildsSize", context.jda.guilds.size)
            engine.put("channel", context.channel)
            engine.put("guild", context.guild)

            val output = (engine.eval(java.lang.String.join("", context.args))).toString()

            if (output.contains(context.jda.token)) return context.channel.sendMessage(":thumbsup:").queue()
            context.channel.sendMessage(
                "```kt\n${if (output.length > 1970) output.substring(0, 1900) else output}\n```"
            ).queue()
            return
        } catch (e: Exception) {
            context.channel.sendMessage("Saida: ${e.message}").queue()
            return
        }

    }
}