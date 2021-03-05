package com.github.mrdrooxbr.rioru.bot.commands.`fun`

import com.github.mrdrooxbr.rioru.bot.structures.commands.Command
import com.github.mrdrooxbr.rioru.bot.structures.commands.enumerator.CommandCategory
import com.github.mrdrooxbr.rioru.bot.structures.commands.CommandContext
import com.github.mrdrooxbr.rioru.utils.apis.UsagiAPI
import com.github.mrdrooxbr.rioru.bot.rioruUtils.EmbedColor
import com.github.mrdrooxbr.rioru.bot.rioruUtils.RioruEmbed

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

        val embed = RioruEmbed(ctx.getAuthor(), EmbedColor.FUN, "pt-BR")

        if(ctx.user()!!.user.id === ctx.getJDA().selfUser.id) {
            embed.setDescription("Nossa :c, porque você me bateu?. ${ctx.getAuthor().asMention} me bateu ")
        } else {
            embed.setDescription("${ctx.getAuthor().asMention} deu um tapa em ${ctx.user()!!.user.asMention}")
        }

        embed.setImage(UsagiAPI().slap())
        ctx.getChannel().sendMessage(embed.build()).queue()
    }
}
