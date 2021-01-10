package net.zoe.corporation.zoebot;

import io.github.cdimascio.dotenv.Dotenv;

import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.entities.Activity;
import net.dv8tion.jda.api.hooks.ListenerAdapter;
import net.dv8tion.jda.api.requests.GatewayIntent;

import net.zoe.corporation.database.MyZoeSQL;
import net.zoe.corporation.website.ZoeDashboard;

import javax.security.auth.login.LoginException;

public class Zoe extends ListenerAdapter {
    public static String token = getEnv("ZOE_TOKEN");
    public static String[] owners = new String[2];
    public static String MySQLDataName = getEnv("DATABASE_NAME");
    public static String MySQLHost = getEnv("DATABASE_HOST");
    public static String MySQLUsername = getEnv("DATABASE_USERNAME");
    public static String MySQLPassword = getEnv("DATABASE_PASSWORD");
    public static MyZoeSQL database = new MyZoeSQL(
            MySQLDataName,
            MySQLHost,
            MySQLUsername,
            MySQLPassword,
            3306);

    public static void main(String[] args) throws LoginException {
        owners[0] = getEnv("OWNER");
        owners[1] = getEnv("CO_OWNER");
        owners[2] = getEnv("DEVELOPER");


        createZoeInstance();
        new ZoeDashboard();
    }

    private static void createZoeInstance() throws LoginException {
        JDABuilder.createDefault(token)
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
                ).build();
    }

    private static String getEnv(String name) {
        final Dotenv env = Dotenv.configure().directory("./").filename(".env").load();
        return env.get(name);
    }
}
