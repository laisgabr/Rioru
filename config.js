const { config } = require('dotenv')

config({
    path: __dirname + '/.env'
})

module.exports = {
    allowedMentions: { everyone: false },
    
    intents: [
        "guilds",
        "guildMembers", 
        "guildBans", 
        "guildEmojis",  
        "guildWebhooks",  
        "guildVoiceStates", 
        "guildPresences", 
        "guildMessages", 
        "guildMessageReactions",
        "guildMessageTyping",
        "directMessages",
        "directMessageReactions",
        "directMessageTyping"
    ], 
    
    token: process.env.BOT_TOKEN,
    
    owners: JSON.parse(process.env.OWNERS),
    
    nodes: JSON.parse(process.env.LAVALINK_NODES),
    
    mongo: process.env.MONGO_URI,

    clientSecret: process.env.CLIENT_SECRET,

    clientId: process.env.CLIENT_ID
}