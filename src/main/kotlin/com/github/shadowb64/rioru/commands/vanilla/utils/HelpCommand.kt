package com.github.shadowb64.rioru.commands.vanilla.utils

import com.github.shadowb64.rioru.commands.RioruColor
import com.github.shadowb64.rioru.commands.RioruEmbedBuilder
import com.github.shadowb64.rioru.commands.caramel.AbstractCommand
import com.github.shadowb64.rioru.commands.caramel.CommandCategory
import com.github.shadowb64.rioru.commands.caramel.CommandContext
import com.github.shadowb64.rioru.managers.command.CommandManager
import com.github.shadowb64.rioru.utilities.RioruEmotes

class HelpCommand : AbstractCommand(
    name = "help",
    aliases = listOf("ajuda", "comandos", "commands"),
    category = CommandCategory.UTILS
) {
    override fun run(context: CommandContext) {
        if (context.args.isEmpty()) {
            val utils = getCategory(CommandCategory.UTILS)
            val listUtils = map(CommandCategory.UTILS)

            val embed = RioruEmbedBuilder(context, RioruColor.DEFAULT)
                .addField("Utils (${utils.size}) ", "`${listUtils}`")
                .build()
            context.channel.sendMessage(embed).queue()
            return
        }

        val cmd = CommandManager.getCommand(context.args[0])

        if (cmd === null) {
            context.channel.sendMessage("Não achei nenhum comando com o nome/sinônimo `${context.args[0]}`")
                .queue()
            return
        } else {
            with(cmd) {
                val embedCmd = RioruEmbedBuilder(context, RioruColor.DEFAULT)
                    .setTitle("Ajuda do comando $name ")
                    .setDescription("$aliases\n Descrição\n ")

                context.channel.sendMessage(embedCmd.build()).queue()
            }
        }

    }

    private fun map(category: CommandCategory) =
        getCategory(category).map { c -> c.name }.toString().replace(Regex("([\\[\\]])"), "")

    private fun getCategory(category: CommandCategory) = CommandManager.commands.filter { c -> c.category === category }
}