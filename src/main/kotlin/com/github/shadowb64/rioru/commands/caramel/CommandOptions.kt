package com.github.shadowb64.rioru.commands.caramel

class CommandOptions(private val ctx: CommandContext, private val cmd: AbstractCommand) {
    fun check(): Unit? {
        val channel = ctx.channel
        with(cmd) {
            // Se o comando tiver esse atributo estando verdadeiro e o bot já estiver no canal de voz
            if (verifyBotAlreadyInVoiceChannel && ctx.guild.selfMember.voiceState!!.inVoiceChannel()) {
                channel.sendMessage(ctx.translate("CommandOptions:botAlreadyInVoiceChannel"))
                    .queue()
                return null
            }

            // Se o Membro não tiver em canal de voz
            if (verifyIfVoiceChannel && !ctx.member!!.voiceState!!.inVoiceChannel()) {
                channel.sendMessage(ctx.translate("CommandOptions:memberIsNotInVoiceChannel"))
                    .queue()
                return null
            }

            if (verifyIfBotVoiceChannel && !ctx.guild.selfMember.voiceState!!.inVoiceChannel()) {
                channel.sendMessage(ctx.translate("CommandOptions:botIsNotInVoiceChannel")).queue()
                return null
            }

            // Verificando se o comando é pra desenvolvedor
            val mapOwners = listOf("807305370480934923", "730425354870587473")
            if (category === CommandCategory.DEVELOPER && !mapOwners.contains(ctx.member?.id)) {
                channel.sendMessage("parado ai").queue()
                return null
            }

            // Verificando se estão em canais diferentes
            if (verifySameChannel && ctx.member?.voiceState !== null && ctx.guild.selfMember.voiceState !== null && ctx.member.voiceState!!.channel!!.idLong != ctx.guild.selfMember.voiceState!!.channel!!.idLong) {
                channel.sendMessage(ctx.translate("CommandOptions:channelIsNotSame")).queue()
                return null
            }
        }
        return Unit
    }
}