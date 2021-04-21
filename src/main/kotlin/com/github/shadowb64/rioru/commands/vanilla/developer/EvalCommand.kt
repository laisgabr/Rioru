package com.github.shadowb64.rioru.commands.vanilla.developer

import com.github.shadowb64.rioru.commands.AbstractCommand
import com.github.shadowb64.rioru.commands.CommandCategory
import com.github.shadowb64.rioru.commands.CommandContext
import javax.script.ScriptEngine
import javax.script.ScriptEngineManager

class EvalCommand : AbstractCommand(
    name = "eval",
    category = CommandCategory.DEVELOPER
) {
    private val engine: ScriptEngine = ScriptEngineManager().getEngineByName("nashorn")

    override fun run(context: CommandContext) {
        if(context.args.isEmpty()) {
            return context.messageEvent.channel.sendMessage("Você precisa me dizer o que eu preciso fazer :pensive:").queue()
        }


        //Runtime.getRuntime().exec("")

        try {
            engine.put("context", context)
            engine.put("jda", context.messageEvent.jda)
            engine.put("usersSize", context.messageEvent.jda.users.size)
            engine.put("guildsSize", context.messageEvent.jda.guilds.size)
            engine.put("channel", context.messageEvent.channel)
            engine.put("guild", context.messageEvent.guild)

            val args = java.lang.String.join("", context.args)
            val output = (engine.eval(args)).toString()

            if(output.contains(context.messageEvent.jda.token)) return context.messageEvent.channel.sendMessage(":thumbsup:").queue()
            context.messageEvent.channel.sendMessage(
                "```kt\n${if (output.length > 1970) output.substring(0, 1900) else output}\n```"
            ).queue()
            return
        } catch (e: Exception) {
            context.messageEvent.channel.sendMessage("Saida: ${e.message}").queue()
            return
        }

    }
}