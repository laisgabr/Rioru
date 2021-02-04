package net.zoe.corporation;

import io.github.cdimascio.dotenv.Dotenv;

public class Config {
    public static final Dotenv env = Dotenv.configure().directory("./").load();
    public static String[] owners = { get("owner"), get("co_owner"), get("developer") };
    public static final String ZoeAPISecret = get("zoeapi_secret");
    public static String ZoeAPIIP = get("zoeapi_ip");
    public static final String token = get("zoe_token");
    
    public static String get(String name) {
        return env.get(name.toUpperCase());
    }
}
