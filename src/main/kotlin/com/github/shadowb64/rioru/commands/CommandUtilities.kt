@file:Suppress("unused")

package com.github.shadowb64.rioru.commands

import com.github.shadowb64.rioru.utilities.Config
import com.github.shadowb64.rioru.utilities.RioruUtilities
import com.github.shadowb64.rioru.utilities.json
import com.github.shadowb64.rioru.utilities.replacePlaceholders
import net.dv8tion.jda.api.Permission
import net.dv8tion.jda.api.events.message.MessageReceivedEvent
import java.time.OffsetDateTime

enum class CommandCategory {
    UTILS, MISCELLANEOUS, DEVELOPER, DISCORD
}

abstract class AbstractCommand(
    val name: String,
    val aliases: List<String> = listOf(),
    val category: CommandCategory = CommandCategory.MISCELLANEOUS,
    val cooldown: Int = 3,
    val userPermissionsNeeded: List<Permission> = listOf(),
    val botPermissionsNeeded: List<Permission> = listOf(),
    val canDisable: Boolean = true,
    val disableReason: String = "",
    val disableTime: Long = System.currentTimeMillis(),
    val verifyBotAlreadyInVoiceChannel: Boolean = false,
    val verifyIfVoiceChannel: Boolean = false,
    val verifySameChannel: Boolean = false,
    val verifyIfBotVoiceChannel: Boolean = false
) {
    abstract fun run(context: CommandContext)
}

class CommandContext(val messageEvent: MessageReceivedEvent, val args: List<String>, private val locale: String) {
    fun translate(translateUri: String, map: Map<String, String> = mapOf()): String {
        return try {
            val uri = translateUri.split(":")
            val file =
                RioruUtilities.readFile("./src/main/kotlin/locales/$locale/${uri[0]}.json").json().getJSONObject(uri[1])

            when (uri.size) {
                3 -> file.getString(uri[2]).replacePlaceholders(map)
                4 -> file.getJSONObject(uri[2]).getString(uri[3]).replacePlaceholders(map)
                5 -> file.getJSONObject(uri[2]).getJSONObject(uri[3]).getString(uri[4]).replacePlaceholders(map)
                else -> ""
            }
        } catch (e: Exception) {
            translateUri
        }
    }

    fun formatTime(time: OffsetDateTime): String =
        "${time.dayOfMonth}/${time.monthValue}/${time.year} ${time.hour}:${time.minute}:${time.second}"

    fun sendMessage(content: String) = messageEvent.channel.sendMessage(content).queue()
}

class CommandOptions(private val ctx: CommandContext, private val cmd: AbstractCommand) {
    @Suppress("LiftReturnOrAssignment", "DEPRECATED_IDENTITY_EQUALS")
    fun check() {
        val channel = ctx.messageEvent.channel
        with(cmd) {
            when {
                // Se o comando tiver esse atributo estando verdadeiro e o bot já estiver no canal de voz
                verifyBotAlreadyInVoiceChannel && ctx.messageEvent.guild.selfMember.voiceState!!.inVoiceChannel() -> {
                    channel.sendMessage(ctx.translate("CommandOptions:botAlreadyInVoiceChannel")).queue()
                    return
                }

                // Se o Membro não tiver em canal de voz
                verifyIfVoiceChannel && !ctx.messageEvent.member!!.voiceState!!.inVoiceChannel() -> {
                    channel.sendMessage(ctx.translate("CommandOptions:memberIsNotInVoiceChannel")).queue()
                    return
                }

                verifyIfBotVoiceChannel && !ctx.messageEvent.guild.selfMember.voiceState!!.inVoiceChannel() -> {
                    channel.sendMessage(ctx.translate("CommandOptions:botIsNotInVoiceChannel")).queue()
                    return
                }

                // Verificando se o comando é pra desenvolvedor
                category === CommandCategory.DEVELOPER && !Config.getBotConf().getJSONArray("developers")
                    .contains(ctx.messageEvent.member?.id) -> {
                    channel.sendMessage(ctx.translate("CommandOptions:isNotDeveloper")).queue()
                    return
                }

                // Verificando se estão em canais diferentes
                ctx.messageEvent.member!!.voiceState!!.channel!!.idLong !== ctx.messageEvent.guild.selfMember.voiceState!!.channel!!.idLong -> {
                    channel.sendMessage(ctx.translate("CommandOptions:channelIsNotSame")).queue()
                    return
                }

                else -> {
                }
            }
        }


    }
}