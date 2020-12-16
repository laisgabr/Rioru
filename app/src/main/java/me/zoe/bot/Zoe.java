package me.zoe.bot;

import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.entities.Activity;
import net.dv8tion.jda.api.hooks.ListenerAdapter;

import javax.security.auth.login.LoginException;

public class Zoe extends ListenerAdapter {
    public static void main(String[] args) throws LoginException {
        var zoe = JDABuilder.createDefault("MY TOKEN HERE");
        zoe.setActivity(Activity.streaming("Agora sou feita em JDA 😎", "https://twitch.tv/mrgamingbr0001"));
        zoe.build();
    }
}
