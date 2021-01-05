package me.zoe.bot;

import io.github.cdimascio.dotenv.Dotenv;

public abstract class Config {
    public static final Dotenv env = Dotenv.configure().directory("./").filename(".env").load();

    public static final String token = env.get("TOKEN");
    public static final String defaultPrefix = env.get("PREFIX");
    public static final String owner = env.get("OWNER");
   
    // public static final String SQLUsername = env.get("SQL_USERNAME");
}