package com.github.shadowb64.rioru.commands

import com.github.shadowb64.rioru.utilities.RioruUtilities
import net.dv8tion.jda.api.EmbedBuilder
import net.dv8tion.jda.api.Permission
import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent
import org.json.JSONObject
import java.awt.Color
import java.time.OffsetDateTime

abstract class AbstractCommand(
    val name: String,
    val aliases: List<String> = listOf(),
    val category: CommandCategory = CommandCategory.MISCELLANEOUS,
    val cooldown: Int = 3,
    val userPermissionsNeeded: List<Permission> = listOf(),
    val botPermissionsNeeded: List<Permission> = listOf(),
    val canDisable: Boolean = true
) { abstract fun run(context: CommandContext) }

enum class CommandCategory { UTILS, MISCELLANEOUS }

class CommandContext(val messageEvent: GuildMessageReceivedEvent, val args: List<String>, private val locale: String) {
    fun translate(translateUri: String, map: Map<String, String> = mapOf()): String {
        val uri = translateUri.split("|")
        val file = RioruUtilities.readFile("./src/main/kotlin/locales/$locale/${uri[0]}.json").json().getJSONObject(uri[1])

        return when(uri.size) {
            3 -> file.getString(uri[2]).replacePlaceholders(map)
            4 -> file.getJSONObject(uri[2]).getString(uri[3]).replacePlaceholders(map)
            5 -> file.getJSONObject(uri[2]).getJSONObject(uri[3]).getString(uri[4]).replacePlaceholders(map)
            else -> ""
        }
    }

    fun sendMessage(content: String) = messageEvent.channel.sendMessage(content).queue()
}

enum class RioruColor(val colorInstance: Color?) {
    DEFAULT(Color(25, 25, 24))
}

class RioruEmbedBuilder(private val ctx: CommandContext, color: RioruColor): EmbedBuilder() {
    init {
        setColor(color.colorInstance)
        setTimestamp(OffsetDateTime.now())
        setFooter(ctx.messageEvent.author.asTag, ctx.messageEvent.author.effectiveAvatarUrl)
    }

    fun setTitle(title: String, url: String? = null, map: Map<String, String> = mapOf()): RioruEmbedBuilder {
        val t = ctx.translate(title, map)
        when (url === null) {
            true -> super.setTitle(t)
            false -> super.setTitle(t, url)
        }

        return this
    }

    fun setDescription(description: String, map: Map<String, String> = mapOf()): RioruEmbedBuilder {
        super.setDescription(ctx.translate(description, map))
        return this
    }

    fun setAuthor(name: String, url: String? = null, iconUrl: String? = null, map: Map<String, String> = mapOf()): RioruEmbedBuilder {
        val n = ctx.translate(name, map)
        when {
            url === null && iconUrl === null -> {
                super.setAuthor(n)
                return this
            }

            url !== null && iconUrl !== null -> {
                super.setAuthor(n, url, iconUrl)
                return this
            }

            url === null && iconUrl !== null -> {
                super.setAuthor(n, null, iconUrl)
                return this
            }

            url !== null && iconUrl === null -> {
                super.setAuthor(n, url)
                return this
            }

            else -> {
                return this
            }
        }
    }

    fun addField(name: String, value: String, inline: Boolean = false, mapName: Map<String, String> = mapOf(), mapValue: Map<String, String> = mapOf()): RioruEmbedBuilder {
        val n = ctx.translate(name, mapName)
        val v = ctx.translate(value, mapValue)
        super.addField(n, v, inline)
        return this
    }
}

fun String.replacePlaceholders(map: Map<String, String>): String {
    if(map.isEmpty()) return this
    var e = this

    for(c in map) {
        e = e.replace("<<${c.key}>>", c.value)
    }

    return e
}

fun String.json() = JSONObject(this)