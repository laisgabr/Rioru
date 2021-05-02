package com.github.shadowb64.rioru.commands.vanilla.utils

import com.github.shadowb64.rioru.commands.RioruColor
import com.github.shadowb64.rioru.commands.RioruEmbedBuilder
import com.github.shadowb64.rioru.commands.caramel.AbstractCommand
import com.github.shadowb64.rioru.commands.caramel.CommandCategory
import com.github.shadowb64.rioru.commands.caramel.CommandCategory.*
import com.github.shadowb64.rioru.commands.caramel.CommandContext
import com.github.shadowb64.rioru.commands.caramel.SlashCommandInfo
import com.github.shadowb64.rioru.managers.command.CommandManager

@SlashCommandInfo(
    name = "help",
    category = UTILS
)
class HelpCommand : AbstractCommand() {
    override fun run(context: CommandContext) {
        if (context.args.isEmpty()) {
            val embed = RioruEmbedBuilder(context, RioruColor.DEFAULT)
                .addField("Utils (${getCategory(UTILS).size})", map(UTILS))
                .addField("Music (${getCategory(MUSIC).size})", map(MUSIC))
                .addField("Informações (${getCategory(DISCORD).size})", map(DISCORD))
                .build()
            context.channel.sendMessage(embed).queue()
            return
        }

        val cmd = CommandManager.getCommandByName(context.message.getOption("commandName")!!.asString)

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

    private fun map(category: CommandCategory) = "`${getCategory(category).map { c -> c.name }.toString().replace(Regex("([\\[\\]])"), "")}`"
    private fun getCategory(category: CommandCategory) = CommandManager.commands.filter { c -> c.config.category === category }
}