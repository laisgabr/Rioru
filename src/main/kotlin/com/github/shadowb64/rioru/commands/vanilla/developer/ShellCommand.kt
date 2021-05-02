package com.github.shadowb64.rioru.commands.vanilla.developer

import com.github.shadowb64.rioru.commands.caramel.AbstractCommand
import com.github.shadowb64.rioru.commands.caramel.CommandCategory
import com.github.shadowb64.rioru.commands.caramel.CommandContext
import com.github.shadowb64.rioru.commands.caramel.SlashCommandInfo
import java.io.IOException

@SlashCommandInfo(
    name = "shell",
    category = CommandCategory.DEVELOPER
)
class ShellCommand : AbstractCommand() {
    override fun run(context: CommandContext) {
        val input = java.lang.String.join(" ", context.message.getOption("command")!!.asString)
        try {
            val output = Runtime.getRuntime().exec(input)
            context.channel.sendMessage(output.outputStream.toString()).queue()
            if (!output.supportsNormalTermination()) output.destroyForcibly().destroy()
        } catch (e: IOException) {
            if (e.message != null) context.channel.sendMessage(context.translate("DeveloperCommands:$name:errorMessage",
                mapOf("input" to input, "err" to e.message!!))).queue()
        }
    }
}