package com.github.mrdroox.projects.commands.`fun`

import com.github.mrdroox.projects.utilities.commands.Command
import com.github.mrdroox.projects.utilities.commands.enumerator.CommandCategory
import com.github.mrdroox.projects.utilities.commands.CommandContext
import com.github.mrdroox.projects.utilities.others.apis.UsagiAPI
import com.github.mrdroox.projects.utilities.others.zoeUtils.EmbedColor
import com.github.mrdroox.projects.utilities.others.zoeUtils.ZoeEmbed

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

        val embed = ZoeEmbed(ctx.getAuthor(), EmbedColor.FUN)

        if(ctx.user()!!.user.name === ctx.getJDA().selfUser.name) {
            embed.setDescription("O ${ctx.getAuthor().asMention} tentou me dar um Tapa :o , Logo em mim :c , Toma esse tapa :P")
        } else {
            embed.setDescription("O ${ctx.getAuthor().asMention} deu um tapa em ${ctx.user()!!.user.asMention}")
        }

        embed.setImage(UsagiAPI().slap())
        ctx.getChannel().sendMessage(embed.build()).queue()
    }
}