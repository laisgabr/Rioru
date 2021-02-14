package com.github.mrdroox.projects.zoe.structures

import net.dv8tion.jda.api.EmbedBuilder
import net.dv8tion.jda.api.entities.User

import java.awt.Color

class ZoeEmbed: EmbedBuilder {
    constructor(user: User) {
        setFooter(user.asTag, user.avatarUrl);
        setColor(Color (255, 10, 247))

    }
}