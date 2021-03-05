package com.github.mrdrooxbr.rioru.bot.commands.`fun`

import com.github.mrdrooxbr.rioru.bot.structures.commands.Command
import com.github.mrdrooxbr.rioru.bot.structures.commands.CommandContext
import com.github.mrdrooxbr.rioru.bot.structures.commands.enumerator.CommandCategory

class KissCommand: Command() {
    override var name: String? = "kiss"
    override var aliases: List<String> = listOf("beijar")
    override var category = CommandCategory.FUN

    override fun execute(ctx: CommandContext) {
        if(!ctx.hasArgsOrMention()) {
            ctx.sendMessage("FunCommands:utils:needArgsOrMention")
            return
        }

        val user = ctx.user()
        if(user === null) {
            var map = HashMap<String, String>()
            map["<<ARGS>>"] = ctx.getArgs()[0]
            ctx.sendMessage("FunCommands:utils:notFoundAnyUser", map)
            return
        }

        if(user.id === user.jda.selfUser.id) {
            ctx.sendMessage("FunCommands:kiss:tryKissBot")
            return
        }
    }
}
