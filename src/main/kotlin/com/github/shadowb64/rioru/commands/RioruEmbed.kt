package com.github.shadowb64.rioru.commands

import net.dv8tion.jda.api.EmbedBuilder
import java.awt.Color
import java.time.OffsetDateTime

enum class RioruColor(val colorInstance: Color?) {
    DEFAULT(Color(255, 10, 10)),
    MODERATION_ACTIONS(Color(255, 0, 0)),
    LOGS(Color(17, 65, 92)),
    ECONOMY(Color(43, 161, 16)),
    FUN(Color(235, 227, 9)),
    GIVEAWAY(Color(237, 120, 9)),
    MINECRAFT(Color(34, 173, 31)),
    MODERATION(Color(19, 116, 171)),
    MUSIC(Color(84, 17, 92)),
    ROBLOX(Color(209, 4, 21)),
    SOCIAL(Color(18, 150, 224))
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