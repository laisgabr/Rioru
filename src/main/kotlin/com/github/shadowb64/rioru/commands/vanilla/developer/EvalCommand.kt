package com.github.shadowb64.rioru.commands.vanilla.developer

import com.github.shadowb64.rioru.commands.caramel.AbstractCommand
import com.github.shadowb64.rioru.commands.caramel.CommandCategory
import com.github.shadowb64.rioru.commands.caramel.CommandContext
import com.github.shadowb64.rioru.commands.caramel.SlashCommandInfo
import javax.script.ScriptEngine
import javax.script.ScriptEngineManager

@SlashCommandInfo(
    name = "eval",
    category = CommandCategory.DEVELOPER
)
class EvalCommand : AbstractCommand() {
    private val engine: ScriptEngine = ScriptEngineManager().getEngineByName("nashorn")

    override fun run(context: CommandContext) {
        try {
            engine.put("context", context)
            engine.put("jda", context.jda)
            engine.put("usersSize", context.jda.users.size)
            engine.put("guildsSize", context.jda.guilds.size)
            engine.put("channel", context.channel)
            engine.put("guild", context.guild)

            val output =
                (engine.eval(java.lang.String.join("", context.message.getOption("args")!!.asString))).toString()

            if (output.contains(context.jda.token)) return context.channel.sendMessage(":thumbsup:").queue()
            context.sendMessage(
                "```kt\n${if (output.length > 1970) output.substring(0, 1900) else output}\n```"
            ).queue()
            return
        } catch (e: Exception) {
            context.sendMessage(
                "DeveloperCommands:$name:errorMessage",
                mapOf("err" to e.message!!)
            ).queue()
            return
        }
    }
}