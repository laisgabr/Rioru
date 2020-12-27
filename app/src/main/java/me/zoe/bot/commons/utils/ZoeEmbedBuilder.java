package me.zoe.bot.commons.utils;

import net.dv8tion.jda.api.EmbedBuilder;
import net.dv8tion.jda.api.entities.User;

import java.time.temporal.TemporalAccessor;
import java.util.Date;

public class ZoeEmbedBuilder extends EmbedBuilder {
    ZoeEmbedBuilder(User user) {
        super();
        setTimestamp((TemporalAccessor) new Date());
        setColor(0x0);
    }
}