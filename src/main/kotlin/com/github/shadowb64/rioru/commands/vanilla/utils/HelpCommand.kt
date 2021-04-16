package com.github.shadowb64.rioru.commands.vanilla.utils

import com.github.shadowb64.rioru.commands.*
import com.github.shadowb64.rioru.managers.CommandManager

class HelpCommand: AbstractCommand(
    name = "help",
    aliases = listOf("ajuda"),
    category = CommandCategory.UTILS
) {
    override fun run(context: CommandContext) {
        if(context.args.isEmpty()) {
            val utils = getCategory(CommandCategory.UTILS)
            val listUtils = (utils.map { c -> c.name }).toString().replace(Regex("([\\[\\]])"), "")
            val embed = RioruEmbedBuilder(context, RioruColor.DEFAULT)
                .setDescription("Utils(${utils.size}) `${listUtils}`")
                .build()
            context.messageEvent.channel.sendMessage(embed).queue()
            return
        }

        val cmd = CommandManager.getCommand(context.args[0])

        if(cmd === null) {
            context.messageEvent.channel.sendMessage("Não achei nenhum comando com o nome/sinônimo `${context.args[0]}`").queue()
            return
        } else {
            context.messageEvent.channel.sendMessage(cmd.aliases.toString()).queue()
        }
    }

    private fun getCategory(category: CommandCategory) = CommandManager.commands.filter { c -> c.category === category }
}