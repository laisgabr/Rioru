import ZoeClient from "./src/Zoe";
import config from "./config";

const Zoe = new ZoeClient(config.token, { 
    allowedMentions: {
        everyone: false    
    },

    intents: [
        "guilds",
        "guildMembers",
        "guildBans",

    ]
});

Zoe.start();