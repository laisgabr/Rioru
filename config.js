const { config } = require('dotenv')

config({
    path: __dirname + '/.env'
})

module.exports = {
    allowedMentions: { everyone: false },
    
    getAllUsers: true, 
    
    intents: [
        "guilds",
        "guildMembers", 
        "guildBans", 
        "guildEmojis", 
        "guildIntegrations", 
        "guildWebhooks",  
        "guildInvites" ,
        "guildVoiceStates", 
        "guildPresences", 
        "guildMessages", 
        "guildMessageReactions",
        "guildMessageTyping"  ,
        "directMessages" ,
        "directMessageReactions",
        "directMessageTyping"
    ], 
    
    token: process.env.BOT_TOKEN,
    
    owners: JSON.parse(process.env.OWNERS),
    
    nodes: JSON.parse(process.env.LAVALINK_NODES),
    
    mongo: process.env.MONGO_URI,
    
    fortnitekey: process.env.FORTNITE_KEY
}