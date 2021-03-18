package com.github.mrdrooxbr.rioru.bot.commands.framework.rioru

import com.github.mrdrooxbr.rioru.bot.commands.framework.CommandContext
import net.dv8tion.jda.api.EmbedBuilder
import java.lang.String.format
import java.time.OffsetDateTime

class RioruEmbed(ctx: CommandContext, color: EmbedColor): EmbedBuilder() {
    init {
        val user = ctx.getAuthor()
        setFooter(user.asTag, user.avatarUrl)
        setColor(color.color)
        setTimestamp(OffsetDateTime.now())
    }
    constructor(ctx: CommandContext): this(ctx, EmbedColor.DEFAULT)

    fun setDescription(description: String, vararg placeholders: String): RioruEmbed {
        super.setDescription(format(description, placeholders))
        return this
    }

    fun setAuthor(name: String, vararg placeholders: String): RioruEmbed {
        super.setDescription(format(name, placeholders))
        return this
    }

    fun setTitle(name: String, vararg placeholders: String): RioruEmbed {
        super.setTitle(format(name, placeholders))
        return this
    }
}