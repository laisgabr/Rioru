package com.github.mrdrooxbr.rioru.bot.rioruUtils

import net.dv8tion.jda.api.EmbedBuilder
import net.dv8tion.jda.api.entities.User
import java.awt.Color
import java.time.OffsetDateTime

class RioruEmbed(user: User?, color: EmbedColor, private val Locale: String): EmbedBuilder() {
    private val translates = RioruTranslates()
    init {
        lateinit var colorToSet: Color
        when {
            color === EmbedColor.DEFAULT -> colorToSet = Color(255, 10, 10)
            color === EmbedColor.MINECRAFT -> colorToSet = Color(34, 173, 31)
            color === EmbedColor.MODERATION_ACTIONS -> colorToSet = Color(255, 0, 0)
            color === EmbedColor.LOGS -> colorToSet = Color(17, 65, 92)
            color === EmbedColor.ROBLOX -> colorToSet = Color(209, 4, 21)
            color === EmbedColor.GIVEAWAY -> colorToSet = Color(237, 120, 9)
            color === EmbedColor.FUN -> colorToSet = Color(235, 227, 9)
            color === EmbedColor.ECONOMY -> colorToSet = Color(43, 161, 16)
            color === EmbedColor.MUSIC -> colorToSet = Color(84, 17, 92)
            color === EmbedColor.MODERATION -> colorToSet = Color(19, 116, 171)
            color === EmbedColor.SOCIAL -> colorToSet = Color(18, 150, 224)
        }

        setFooter(user?.asTag, user?.avatarUrl)
        setColor(colorToSet)
        setTimestamp(OffsetDateTime.now())
    }

    constructor(user: User?, locale: String): this(user, EmbedColor.DEFAULT, locale)

    fun setDescription(description: String, map: HashMap<String, String>): EmbedBuilder {
        return super.setDescription(placeholders(getTranslate(description), map))
    }

    fun addField(name: String?, value: String?, inline: Boolean, map: HashMap<String, String>): EmbedBuilder {
        return super.addField(placeholders(getTranslate(name), map),
            placeholders(getTranslate(value), map), inline)
    }

    fun setAuthor(name: String, url: String, map: HashMap<String, String>): EmbedBuilder {
        return super.setAuthor(placeholders(getTranslate(name), map), url)
    }

    fun setAuthor(name: String, map: HashMap<String, String>): EmbedBuilder {
        return super.setAuthor(placeholders(getTranslate(name), map))
    }

    fun setTitle(name: String, map: HashMap<String, String>): EmbedBuilder {
        return super.setTitle(placeholders(getTranslate(name), map))
    }

    fun setDescription(description: String): EmbedBuilder {
        return super.setDescription(getTranslate(description))
    }

    override fun addField(name: String?, value: String?, inline: Boolean): EmbedBuilder {
        return super.addField(getTranslate(name), getTranslate(value), inline)
    }

    override fun setTitle(title: String?): EmbedBuilder {
        return super.setTitle(getTranslate(title))
    }

    override fun setAuthor(name: String?): EmbedBuilder {
        return super.setAuthor(getTranslate(name))
    }

    override fun setAuthor(name: String?, url: String?): EmbedBuilder {
        return super.setAuthor(getTranslate(name), getTranslate(url))
    }

    @JvmName("getTranslate1")
    private fun getTranslate(translationUri: String?): String {
        val array = translationUri?.split(":")
        return translates.get(Locale, array?.get(0).toString(), array?.get(1))?.get(array?.get(2)) as String
    }

    private fun getTranslate(translationUri: String): String {
        val array = translationUri.split(":")
        return translates.get(Locale, array[0], array[1])?.get(array[2]) as String
    }

    private fun placeholders(text: String, map: HashMap<String, String>): String {
        for(m in map) { text.replace(m.key, m.value) }
        return text
    }
}