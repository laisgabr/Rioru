package com.github.mrdrooxbr.rioru.bot.commands.framework.rioru

import com.github.mrdrooxbr.rioru.bot.commands.framework.CommandContext
import net.dv8tion.jda.api.EmbedBuilder
import java.time.OffsetDateTime

class RioruEmbed(private val ctx: CommandContext, color: EmbedColor): EmbedBuilder() {
    private val translates = RioruTranslates()
    init {
        val user = ctx.getAuthor()
        setFooter(user.asTag, user.avatarUrl)
        setColor(color.color)
        setTimestamp(OffsetDateTime.now())
    }

    constructor(ctx: CommandContext): this(ctx, EmbedColor.DEFAULT)

    fun setDescription(description: String, map: HashMap<String, String>? = null): EmbedBuilder {
         return if(map === null)
             super.setDescription(getTranslate(description))
         else
             super.setDescription(placeholders(getTranslate(description), map))

    }

    fun addField(name: String?, value: String?, inline: Boolean = false, map: HashMap<String, String>? = null): EmbedBuilder {
        return if(map === null)
            super.addField(name?.let { getTranslate(it) }, value?.let { getTranslate(it) }, inline)
        else
            super.addField(name?.let { getTranslate(it) }?.let { placeholders(it, map) }, value?.let {
                getTranslate(
                    it
                )
            }?.let { placeholders(it, map) }, inline)
    }

    fun setAuthor(name: String, url: String? = null, map: HashMap<String, String>? = null): EmbedBuilder {
        return if(url === null) {
            if(map === null) {
                super.setAuthor(getTranslate(name))
            } else {
                super.setAuthor(placeholders(getTranslate(name), map))
            }
        } else {
            if(map === null) {
                super.setAuthor(getTranslate(name), getTranslate(url))
            } else {
                super.setAuthor(placeholders(getTranslate(name), map), placeholders(getTranslate(url), map))
            }
        }
    }

    fun setTitle(name: String, url: String? = null, map: HashMap<String, String>? = null): EmbedBuilder {
        return if(url === null)
            if(map === null)
                super.setTitle(getTranslate(name))
            else {
                super.setTitle(placeholders(getTranslate(name), map))
            } else
                if(map === null) super.setTitle(getTranslate(name), getTranslate(url)) else {
            super.setTitle(placeholders(getTranslate(name), map), placeholders(getTranslate(url), map))
        }
    }

    private fun getTranslate(translationUri: String): String {
        val array = translationUri.split(":")
        return translates.get(ctx.locale, array[0]) as String
    }

    private fun placeholders(text: String, map: HashMap<String, String>? = null): String {
        if (map !== null) for(m in map) text.replace(m.key, m.value)
        return text
    }
}