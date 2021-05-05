package com.github.shadowb64.rioru.commands.marshall.developer

import com.github.shadowb64.rioru.commands.marshall.CommandContext
import com.github.shadowb64.rioru.commands.utils.Command
import com.github.shadowb64.rioru.commands.utils.CommandCategory
import com.github.shadowb64.rioru.commands.utils.CommandInfo

@CommandInfo(
    name = "eval",
    category = CommandCategory.DEVELOPER,
    isSlashCommand = false
)
class EvalCommand : Command() {
    override fun run(context: CommandContext) {

        if (context.args.isEmpty())
            return context.reply("Você precisa me passar um argumento válido").queue()

    }
}