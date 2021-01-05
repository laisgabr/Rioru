package me.zoe.bot;

import me.zoe.bot.listeners.client.OnMessageReceivedListener;
import me.zoe.bot.listeners.client.OnReadyListener;
import me.zoe.bot.loaders.CommandLoader;

import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.entities.Activity;
import net.dv8tion.jda.api.hooks.ListenerAdapter;
import net.dv8tion.jda.api.requests.GatewayIntent;

import javax.security.auth.login.LoginException;

public class Zoe extends ListenerAdapter {
    Zoe() throws LoginException {
        super();
        load();
    }

    public void load() throws LoginException {
        JDABuilder.createDefault(Config.token)
        .setActivity(
                Activity.streaming("Oiiiii, Agora sou feita em Java Discord Api 😎", "https://twitch.tv/mrgamingbr0001")
        )
                .enableIntents(
                GatewayIntent.GUILD_WEBHOOKS,
                GatewayIntent.GUILD_MEMBERS,
                GatewayIntent.GUILD_EMOJIS,
                GatewayIntent.GUILD_MESSAGE_REACTIONS,
                GatewayIntent.GUILD_INVITES,
                GatewayIntent.GUILD_VOICE_STATES,
                GatewayIntent.GUILD_MESSAGE_TYPING,
                GatewayIntent.GUILD_MESSAGES,
                GatewayIntent.GUILD_BANS,
                GatewayIntent.DIRECT_MESSAGES,
                GatewayIntent.DIRECT_MESSAGE_TYPING
        ).build().addEventListener(
                new OnReadyListener(),
                new OnMessageReceivedListener()
        );
    }
    
}
