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
            ctx.getChannel().sendMessage(ctx.translate(":x:","FunCommands:utils:needArgsOrMention")).queue()
            return
        }

        val user = ctx.user()
        if(user === null) {
            ctx.getChannel().sendMessage(ctx.translate(ctx.emojis.zoeRage,"FunCommands:utils:notFoundAnyUser")
                    .replace("<<ARGS>>", ctx.getArgs()[0])).queue()
            return
        }

        if(user.id === user.jda.selfUser.id) {
            ctx.getChannel().sendMessage("").queue()
        }
    }
}