package com.github.mrdrooxbr.rioru.bot.rioruUtils

import net.dv8tion.jda.api.EmbedBuilder
import net.dv8tion.jda.api.entities.User
import java.time.OffsetDateTime

class RioruEmbed(user: User?, color: EmbedColor, private val Locale: String): EmbedBuilder() {
    private val translates = RioruTranslates()
    init {
        setFooter(user?.asTag, user?.avatarUrl)
        setColor(color.color)
        setTimestamp(OffsetDateTime.now())
    }

    constructor(user: User?, locale: String): this(user, EmbedColor.DEFAULT, locale)

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
        return if(url === null) {
            if(map === null) {
                super.setTitle(getTranslate(name))
            } else {
                super.setTitle(placeholders(getTranslate(name), map))
            }
        } else {
            if(map === null) {
                super.setTitle(getTranslate(name), getTranslate(url))
            } else {
                super.setTitle(placeholders(getTranslate(name), map), placeholders(getTranslate(url), map))
            }
        }
    }

    private fun getTranslate(translationUri: String): String {
        val array = translationUri.split(":")
        return translates.get(Locale, array[0], array[1])?.get(array[2]) as String
    }

    private fun placeholders(text: String, map: HashMap<String, String>? = null): String {
        if (map !== null) for(m in map) text.replace(m.key, m.value)
        return text
    }
}