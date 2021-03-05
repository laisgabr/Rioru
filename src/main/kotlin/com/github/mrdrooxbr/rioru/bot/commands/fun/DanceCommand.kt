package com.github.mrdrooxbr.rioru.bot.commands.`fun`

import com.github.mrdrooxbr.rioru.bot.structures.commands.Command
import com.github.mrdrooxbr.rioru.bot.structures.commands.CommandContext
import com.github.mrdrooxbr.rioru.bot.structures.commands.enumerator.CommandCategory
import com.github.mrdrooxbr.rioru.utils.apis.UsagiAPI
import com.github.mrdrooxbr.rioru.bot.rioruUtils.EmbedColor
import com.github.mrdrooxbr.rioru.bot.rioruUtils.RioruEmbed

class DanceCommand: Command() {
    override var name: String? = "dance"
    override var aliases: List<String> = listOf("dançar", "dancar")
    override var category = CommandCategory.FUN
    override var argsSize: Int? = 1
    override fun execute(ctx: CommandContext) {
        if(ctx.user() === null) {
            ctx.getChannel().sendMessage("Não encontrei ninguém que tenha o ID/Username `${ctx.getArgs()[0]}`").queue()
            return
        }

        val description = HashMap<String, String>()
        description["AUTHOR"] = ctx.getAuthor().asMention
        description["USER"] = ctx.user()!!.user.asMention
        val embed = RioruEmbed(ctx.getAuthor(), EmbedColor.FUN, "pt-BR")
        embed.setDescription("FunCommands:dance:embedDescription", description)
        embed.setImage(UsagiAPI().dance())

        ctx.sendMessage(embed)
    }
}
