package com.github.mrdroox.projects.commands.`fun`

import com.github.mrdroox.projects.utilities.commands.Command
import com.github.mrdroox.projects.utilities.commands.enumerator.CommandCategory
import com.github.mrdroox.projects.utilities.commands.CommandContext
import com.github.mrdroox.projects.utilities.others.apis.UsagiAPI
import com.github.mrdroox.projects.utilities.others.rioruUtils.EmbedColor
import com.github.mrdroox.projects.utilities.others.rioruUtils.RioruEmbed

class SlapCommand: Command() {
    override var name: String? = "slap"
    override var aliases = listOf("tapa")
    override var category = CommandCategory.FUN

    override fun execute(ctx: CommandContext) {
        if(!ctx.hasArgsOrMention()) {
            ctx.getChannel().sendMessage("Você precisa mencionar um membro, me passar um ID ou me passar um Nickname")
                .queue()
            return
        }

        if(ctx.user() === null) {
            ctx.getChannel().sendMessage("Não encontrei ninguém que tenha o ID/Username `${ctx.getArgs()[0]}`").queue()
            return
        }

        val embed = RioruEmbed(ctx.getAuthor(), EmbedColor.FUN)

        if(ctx.user()!!.user.id === ctx.getJDA().selfUser.id) {
            embed.setDescription("Nossa :c, porque você me bateu?. ${ctx.getAuthor().asMention} me bateu ")
        } else {
            embed.setDescription("${ctx.getAuthor().asMention} deu um tapa em ${ctx.user()!!.user.asMention}")
        }

        embed.setImage(UsagiAPI().slap())
        ctx.getChannel().sendMessage(embed.build()).queue()
    }
}