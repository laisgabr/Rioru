package com.github.mrdroox.projects.commands.`fun`

import com.github.mrdroox.projects.utilities.commands.Command
import com.github.mrdroox.projects.utilities.commands.CommandContext
import com.github.mrdroox.projects.utilities.commands.enumerator.CommandCategory

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
