package com.github.shadowb64.rioru.commands

import com.github.shadowb64.rioru.utilities.RioruUtilities
import com.github.shadowb64.rioru.utilities.json
import com.github.shadowb64.rioru.utilities.replacePlaceholders
import net.dv8tion.jda.api.Permission
import net.dv8tion.jda.api.events.message.MessageReceivedEvent

enum class CommandCategory {
    UTILS, MISCELLANEOUS, DEVELOPER
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
    val disableTime: Long = System.currentTimeMillis()
) { abstract fun run(context: CommandContext) }

class CommandContext(val messageEvent: MessageReceivedEvent, val args: List<String>, private val locale: String) {
    fun translate(translateUri: String, map: Map<String, String> = mapOf()): String {
        try {
            val uri = translateUri.split(":")
            val file =
                RioruUtilities.readFile("./src/main/kotlin/locales/$locale/${uri[0]}.json").json().getJSONObject(uri[1])

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

    fun sendMessage(content: String) = messageEvent.channel.sendMessage(content).queue()
}