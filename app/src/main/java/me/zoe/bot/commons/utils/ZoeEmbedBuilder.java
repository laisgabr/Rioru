package me.zoe.bot.commons.utils;

import net.dv8tion.jda.api.EmbedBuilder;
import net.dv8tion.jda.api.entities.User;

public class ZoeEmbedBuilder extends EmbedBuilder {
    ZoeEmbedBuilder(User user) {
        super();
        setTimestamp(new Date());
        setColor(0x0);
    }
}