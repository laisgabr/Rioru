package com.github.shadowb64.rioru.commands.vanilla.utils

import com.github.shadowb64.rioru.commands.*
import com.github.shadowb64.rioru.managers.CommandManager

class HelpCommand : AbstractCommand(
    name = "help",
    aliases = listOf("ajuda"),
    category = CommandCategory.UTILS
) {
    override fun run(context: CommandContext) {
        if (context.args.isEmpty()) {
            val utils = getCategory(CommandCategory.UTILS)
            val listUtils = map(CommandCategory.UTILS)

            val embed = RioruEmbedBuilder(context, RioruColor.DEFAULT)
                .addField("Utils (${utils.size}) ","`${listUtils}`")
                .build()
            context.messageEvent.channel.sendMessage(embed).queue()
            return
        }

        val cmd = CommandManager.getCommand(context.args[0])

        if (cmd === null) {
            context.messageEvent.channel.sendMessage("Não achei nenhum comando com o nome/sinônimo `${context.args[0]}`")
                .queue()
            return
        } else {
            val embedCmd = RioruEmbedBuilder(context, RioruColor.DEFAULT)
                .setDescription("Nome `${cmd.name}`\nAliases ${cmd.aliases}\n Descrição\n ")
            context.messageEvent.channel.sendMessage(embedCmd.build()).queue()
        }

    }
    private fun map(category: CommandCategory) = getCategory(category).map { c -> c.name }.toString().replace(Regex("([\\[\\]])"), "")
    private fun getCategory(category: CommandCategory) = CommandManager.commands.filter { c -> c.category === category }
}