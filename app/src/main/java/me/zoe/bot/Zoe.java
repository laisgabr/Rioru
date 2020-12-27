package me.zoe.bot;

import me.zoe.bot.loaders.CommandLoader;
import me.zoe.bot.loaders.EventsLoader;
import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.entities.Activity;
import net.dv8tion.jda.api.requests.GatewayIntent;

import javax.security.auth.login.LoginException;

public class Zoe {

    public void main(String[] args) throws LoginException {
        initLoaders();
        JDABuilder.createDefault(Config.token)
        .setActivity(
                Activity.streaming("Agora sou feita em JDA 😎", "https://twitch.tv/mrgamingbr0001")
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
        ).build();
    }
    
    public void initLoaders() {
        new CommandLoader();
        new EventsLoader(this);
    }
}
