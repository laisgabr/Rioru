@file:Suppress("unused")

package com.github.shadowb64.rioru.commands

import com.github.shadowb64.rioru.utilities.RioruUtilities
import com.github.shadowb64.rioru.utilities.json
import com.github.shadowb64.rioru.utilities.replacePlaceholders
import net.dv8tion.jda.api.JDA
import net.dv8tion.jda.api.Permission
import net.dv8tion.jda.api.entities.*
import net.dv8tion.jda.api.events.message.MessageReceivedEvent
import java.time.OffsetDateTime

enum class CommandCategory {
    UTILS, MISCELLANEOUS, DEVELOPER, DISCORD, MUSIC
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
    val verifyIfBotVoiceChannel: Boolean = false,
) {
    abstract fun run(context: CommandContext)
}

class CommandContext(
    val messageEvent: MessageReceivedEvent,
    val args: List<String>,
    private val locale: String,
) {
    val guild: Guild = messageEvent.message.guild;
    val channel: MessageChannel = messageEvent.message.channel;
    val member: Member? = messageEvent.message.member;
    val message: Message = messageEvent.message;
    val jda: JDA = messageEvent.jda;
    val author: User = messageEvent.author;

    override fun toString(): String {
        return "CommandContext($messageEvent, $args, $locale)"
    }

    fun formatMilliseconds(milliseconds: Long): String {
        val seconds = (milliseconds / 1000).toInt() % 60
        val minutes = (milliseconds / (1000 * 60) % 60)
        val hours = (milliseconds / (1000 * 60 * 60) % 24)

        return if (hours > 0) String.format("%02d:%02d:%02d", hours, minutes, seconds) else String.format(
            "%02d:%02d",
            minutes,
            seconds
        )
    }

    fun translate(translateUri: String, map: Map<String, String> = mapOf(), getAnyString: Boolean = false): String {
        try {
            val uri = translateUri.split(":")
            var file =
                RioruUtilities.readFile("./src/main/kotlin/locales/$locale/${uri[0]}.json").json()

            if (getAnyString) {
                return file.getString(uri[1])
            } else {
                file = file.getJSONObject(uri[1])
            }

            return when (uri.size) {
                3 -> file.getString(uri[2]).replacePlaceholders(map)
                4 -> file.getJSONObject(uri[2]).getString(uri[3]).replacePlaceholders(map)
                5 -> file.getJSONObject(uri[2]).getJSONObject(uri[3]).getString(uri[4]).replacePlaceholders(map)
                else -> ""
            }
        } catch (e: Exception) {
            return translateUri
        }
    }

    fun formatTime(time: OffsetDateTime): String =
        "${time.dayOfMonth}/${if (time.monthValue < 10) "0${time.monthValue}" else time.monthValue}/${time.year} ${time.hour}:${time.minute}:${time.second}"

    fun sendMessage(content: String) = channel.sendMessage(content).queue()

    fun getUser(): User? {
        try {
            val author = author
            val mentionedMemberList = message.mentionedMembers
            val mentionedUserList = message.mentionedUsers
            when {
                mentionedMemberList.isEmpty() && mentionedUserList.isEmpty() && args.isEmpty() -> return author
                mentionedMemberList.isNotEmpty() -> return mentionedMemberList[0].user
                mentionedMemberList.isEmpty() && args.isNotEmpty() -> {
                    if (args[0].toLongOrNull() !== null) {
                        jda.shardManager?.retrieveUserById(args[0])
                            .also { user -> return user?.complete() }
                    } else {
                        val usersFilter = guild.getMembersByEffectiveName(args[0], true)
                        usersFilter[0].user
                    }

                }
                else -> return author
            }
        } catch (e: Exception) {
            return null
        }

        return null
    }
}

class CommandOptions(private val ctx: CommandContext, private val cmd: AbstractCommand) {
    fun check(): Unit? {
        val channel = ctx.channel
        with(cmd) {
            // Se o comando tiver esse atributo estando verdadeiro e o bot já estiver no canal de voz
            if (verifyBotAlreadyInVoiceChannel && ctx.guild.selfMember.voiceState!!.inVoiceChannel()) {
                channel.sendMessage(ctx.translate("CommandOptions:botAlreadyInVoiceChannel", getAnyString = true))
                    .queue()
                return null
            }

            // Se o Membro não tiver em canal de voz
            if (verifyIfVoiceChannel && !ctx.member!!.voiceState!!.inVoiceChannel()) {
                channel.sendMessage(ctx.translate("CommandOptions:memberIsNotInVoiceChannel", getAnyString = true))
                    .queue()
                return null
            }

            if (verifyIfBotVoiceChannel && !ctx.guild.selfMember.voiceState!!.inVoiceChannel()) {
                channel.sendMessage(ctx.translate("CommandOptions:botIsNotInVoiceChannel", getAnyString = true)).queue()
                return null
            }

            // Verificando se o comando é pra desenvolvedor
            val mapOwners = listOf("807305370480934923", "730425354870587473")
            if (category === CommandCategory.DEVELOPER && !mapOwners.contains(ctx.member?.id)) {
                channel.sendMessage("parado ai").queue()
                return null
            }

            // Verificando se estão em canais diferentes
            if (verifySameChannel && ctx.member?.voiceState !== null && ctx.guild.selfMember.voiceState !== null && ctx.member!!.voiceState!!.channel!!.idLong != ctx.guild.selfMember.voiceState!!.channel!!.idLong) {
                channel.sendMessage(ctx.translate("CommandOptions:channelIsNotSame", getAnyString = true)).queue()
                return null
            }
        }
        return Unit
    }
}