package me.zoe.bot;

import java.util.Map;
import java.util.Set;

import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.entities.Activity;
import net.dv8tion.jda.api.hooks.ListenerAdapter;

import javax.security.auth.login.LoginException;

public class Zoe {
    Zoe(String token, String TranslateEndpoint) {
        this.token = token;

        this.commands = new Map();
        this.apis = new Set();
    }
    
    public void load() throws LoginException {
        initLoaders("./commands", "./listeners/client", "./listeners/lavaplayer");
        var zoe = JDABuilder.createDefault(this.token);
        zoe.setActivity(Activity.streaming("Agora sou feita em JDA 😎", "https://twitch.tv/mrgamingbr0001"));
        zoe.enableIntents();
        zoe.build();
    }
    
    public void initLoaders(
    String CommandsDirectory,
    String JDAEventsDirectory, 
    String LavaplayerEventsDirectory) {
        new CommandLoader(this);
    }
}
