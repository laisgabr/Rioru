package com.github.shadowb64.rioru.commands.vanilla.developer

import com.github.shadowb64.rioru.commands.caramel.AbstractCommand
import com.github.shadowb64.rioru.commands.caramel.CommandCategory
import com.github.shadowb64.rioru.commands.caramel.CommandContext
import java.io.IOException

class ShellCommand : AbstractCommand(
    name = "shell",
    aliases = listOf("sh"),
    category = CommandCategory.DEVELOPER
) {
    override fun run(context: CommandContext) {
        val input = java.lang.String.join(" ", context.args)
        try {
            val output = Runtime.getRuntime().exec(input)
            context.channel.sendMessage(output.outputStream.toString()).queue()
            if(!output.supportsNormalTermination()) output.destroyForcibly().destroy()
        } catch(e: IOException) {
            if(e.message != null) context.channel.sendMessage("Ocorreu um erro ao executar o comando `$input` no meu Bash `${e.message}`").queue()
        }
    }
}