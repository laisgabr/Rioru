package net.zoe.corporation;

import io.github.cdimascio.dotenv.Dotenv;

import net.dv8tion.jda.api.entities.Activity;
import net.dv8tion.jda.api.hooks.ListenerAdapter;
import net.dv8tion.jda.api.requests.GatewayIntent;
import net.dv8tion.jda.api.sharding.DefaultShardManagerBuilder;
import net.dv8tion.jda.api.sharding.ShardManager;

import javax.security.auth.login.LoginException;

import net.zoe.corporation.listeners.*;

public class Zoe extends ListenerAdapter {
    public Zoe() throws LoginException {
        start();
    }
 
    public static final String ZoeAPIPort = getEnvStatic("ZOEAPI_PORT");
    public static final String ZoeAPIIP = getEnvStatic("ZOEAPI_IP");
    public final String token = getEnv("ZOE_TOKEN");
    public static String[] owners = new String[2];
    public static final Dotenv env = Dotenv.load();
    
    public void start() throws LoginException {
        owners[0] = getEnv("OWNER");
        owners[1] = getEnv("CO_OWNER");
        owners[2] = getEnv("DEVELOPER");
        createZoeInstance();
    }
    
    private ShardManager createZoeInstance() throws LoginException {
        ShardManager shardManager = DefaultShardManagerBuilder.createDefault(token,
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
                GatewayIntent.DIRECT_MESSAGE_TYPING).setActivity(Activity.competing("em Jogos de Corrida :P"))
                .setShardsTotal(Integer.parseInt(getEnv("SHARDS")))
                .addEventListeners(
                    new GuildMessageReceivedListener() // GuildMessageCreate Event 
                ).build();
        return shardManager;
    }
    
    public String getEnv(String name) {
        return env.get(name);
    }

    public static String getEnvStatic(String name) {
        return env.get(name);
    }
}
