package com.github.shadowb64.rioru.commands.utils

import com.github.shadowb64.rioru.commands.slash.CommandContext
import com.github.shadowb64.rioru.commands.utils.interfaces.ICommand
import com.github.shadowb64.rioru.commands.utils.interfaces.ICommandContext

class CommandOptions(private val ctx: ICommandContext, private val cmd: ICommand, val isSlash: Boolean) {
    fun check(): Unit? {
        with(cmd.config) {
            // Verificando se o Comando é Slash
            val context = if(isSlashCommand) ctx as CommandContext
            else ctx as com.github.shadowb64.rioru.commands.marshall.CommandContext
            // Se o comando tiver esse atributo estando verdadeiro e o bot já estiver no canal de voz
            if (verifyBotAlreadyInVoiceChannel && context.guild?.selfMember?.voiceState!!.inVoiceChannel()) {
                context.reply("CommandOptions:botAlreadyInVoiceChannel")
                    .queue()
                return null
            }

            // Se o Membro não tiver em canal de voz
            if (verifyIfVoiceChannel && !context.member!!.voiceState!!.inVoiceChannel()) {
                context.reply("CommandOptions:memberIsNotInVoiceChannel")
                    .queue()
                return null
            }

            if (verifyIfBotVoiceChannel && !context.guild?.selfMember?.voiceState!!.inVoiceChannel()) {
                context.reply("CommandOptions:botIsNotInVoiceChannel").queue()
                return null
            }

            // Verificando se o comando é pra desenvolvedor
            val mapOwners = listOf("807305370480934923", "730425354870587473")
            if (category === CommandCategory.DEVELOPER && !mapOwners.contains(context.member?.id)) {
                context.reply("parado ai").queue()
                return null
            }

            // Verificando se estão em canais diferentes
            if (verifySameChannel && context.member?.voiceState !== null && context.guild?.selfMember?.voiceState !== null && context.member!!.voiceState!!.channel!!.idLong != context.guild!!.selfMember.voiceState!!.channel!!.idLong) {
                context.reply(context.translate("CommandOptions:channelIsNotSame")).queue()
                return null
            }
        }
        return Unit
    }
}