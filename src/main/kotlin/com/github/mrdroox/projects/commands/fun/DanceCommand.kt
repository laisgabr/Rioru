package com.github.mrdroox.projects.commands.`fun`

import com.github.mrdroox.projects.utilities.commands.Command
import com.github.mrdroox.projects.utilities.commands.CommandContext
import com.github.mrdroox.projects.utilities.commands.enumerator.CommandCategory
import com.github.mrdroox.projects.utilities.others.apis.UsagiAPI
import com.github.mrdroox.projects.utilities.others.rioruUtils.EmbedColor
import com.github.mrdroox.projects.utilities.others.rioruUtils.RioruEmbed

class DanceCommand: Command() {
    override var name: String? = "dance"
    override var aliases: List<String> = listOf("dançar", "dancar")
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
        embed.setDescription("${ctx.getAuthor().asMention} dançou com ${ctx.user()!!.user.asMention}")
        embed.setImage(UsagiAPI().dance())
        ctx.getChannel().sendMessage(embed.build()).queue()
    }
}