package net.zoe.corporation;

import net.dv8tion.jda.api.entities.Activity;
import net.dv8tion.jda.api.hooks.ListenerAdapter;
import net.dv8tion.jda.api.requests.GatewayIntent;
import net.dv8tion.jda.api.sharding.DefaultShardManagerBuilder;

import javax.security.auth.login.LoginException;

import net.zoe.corporation.listeners.*;
import net.zoe.corporation.structures.commands.CommandManager;
import net.zoe.corporation.structures.utils.Logging;
import net.zoe.corporation.utilities.YMLJacksonLoader;

public class Zoe extends ListenerAdapter {
    public Zoe() throws LoginException {
        createZoeInstance();
    }
    
    private void createZoeInstance() throws LoginException, NumberFormatException {
        DefaultShardManagerBuilder.createDefault(Config.token,
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
        GatewayIntent.DIRECT_MESSAGE_TYPING)
        .setActivity(Activity.competing("em Jogos de Corrida :P"))
        .setShardsTotal(Integer.parseInt(Config.get("shards")))
        .addEventListeners(
        new GuildMessageReceivedListener() // GuildMessageCreate Event 
        ).build();

        Logging.sucess("Zoe instance created with sucess");
        Logging.info("Creating a Command Manager wait......");
        
        new CommandManager();
        
        Logging.info("Starting the push Locales and Loading Jackson YML Loader");
        new YMLJacksonLoader();
    }
}
