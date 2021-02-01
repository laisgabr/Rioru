package net.zoe.corporation.structures.utils;

import net.dv8tion.jda.api.EmbedBuilder;
import net.dv8tion.jda.api.entities.User;

import java.awt.Color;

public class ZoeEmbedBuilder extends EmbedBuilder {
    public ZoeEmbedBuilder(Member user) {
        super();
        setFooter(user.getName(), user.getEffectiveAvatarUrl());
        setColor(new Color(255, 10, 247));
    }
}
