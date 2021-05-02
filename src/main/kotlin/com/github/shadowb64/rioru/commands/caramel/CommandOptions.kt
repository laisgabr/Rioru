package com.github.shadowb64.rioru.commands.caramel

class CommandOptions(private val context: CommandContext, private val cmd: AbstractCommand) {
    fun check(): Unit? {
        with(cmd.config) {
            // Se o comando tiver esse atributo estando verdadeiro e o bot já estiver no canal de voz
            if (verifyBotAlreadyInVoiceChannel && context.guild?.selfMember?.voiceState!!.inVoiceChannel()) {
                context.sendMessage("CommandOptions:botAlreadyInVoiceChannel")
                    .queue()
                return null
            }

            // Se o Membro não tiver em canal de voz
            if (verifyIfVoiceChannel && !context.member!!.voiceState!!.inVoiceChannel()) {
                context.sendMessage("CommandOptions:memberIsNotInVoiceChannel")
                    .queue()
                return null
            }

            if (verifyIfBotVoiceChannel && !context.guild?.selfMember?.voiceState!!.inVoiceChannel()) {
                context.sendMessage("CommandOptions:botIsNotInVoiceChannel").queue()
                return null
            }

            // Verificando se o comando é pra desenvolvedor
            val mapOwners = listOf("807305370480934923", "730425354870587473")
            if (category === CommandCategory.DEVELOPER && !mapOwners.contains(context.member?.id)) {
                context.sendMessage("parado ai").queue()
                return null
            }

            // Verificando se estão em canais diferentes
            if (verifySameChannel && context.member?.voiceState !== null && context.guild?.selfMember?.voiceState !== null && context.member.voiceState!!.channel!!.idLong != context.guild.selfMember.voiceState!!.channel!!.idLong) {
                context.sendMessage(context.translate("CommandOptions:channelIsNotSame")).queue()
                return null
            }
        }
        return Unit
    }
}