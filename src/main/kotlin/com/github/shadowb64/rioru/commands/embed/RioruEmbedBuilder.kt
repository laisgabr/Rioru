package com.github.shadowb64.rioru.commands.embed

import com.github.shadowb64.rioru.commands.slash.CommandContext
import net.dv8tion.jda.api.EmbedBuilder
import java.time.OffsetDateTime

class RioruEmbedBuilder(private val ctx: CommandContext, color: RioruColor) : EmbedBuilder() {
    init {
        setColor(color.colorInstance)
        setTimestamp(OffsetDateTime.now())
        setFooter(ctx.author.asTag, ctx.author.effectiveAvatarUrl)
    }

    fun setTitle(title: String, url: String? = null, map: Map<String, String> = mapOf()): RioruEmbedBuilder {
        val t = ctx.translate(title, map)
        when (url === null) {
            true -> super.setTitle(t)
            false -> super.setTitle(t, url)
        }

        return this
    }

    fun setDescription(description: String, map: Map<String, Any> = mapOf()): RioruEmbedBuilder {
        super.setDescription(ctx.translate(description, map))
        return this
    }

    fun setAuthor(
        name: String,
        url: String? = null,
        iconUrl: String? = null,
        map: Map<String, String> = mapOf()
    ): RioruEmbedBuilder {
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

    fun addField(
        name: Any,
        value: Any,
        inline: Boolean = false,
        mapName: Map<String, String> = mapOf(),
        mapValue: Map<String, String> = mapOf()
    ): RioruEmbedBuilder {
        val n = ctx.translate(name.toString(), mapName)
        val v = ctx.translate(value.toString(), mapValue)
        super.addField(n, v, inline)
        return this
    }
}