const { config } = require('dotenv')
config({
   path: __dirname + "/.env"
});

const { Intents } = require('discord.js')

module.exports = {
    disableEveryone: true,
    fetchAllMembers: true,
    ws: { intents: Intents.ALL },

    emojis: {
        sucess: '<:checkSweet:757016162633646211>',
        error: '<:xSweet:756989900661850182>'
    },

    token: process.env.BOT_TOKEN,
    owners: JSON.parse(process.env.OWNERS),
    nodes: JSON.parse(process.env.LAVALINK_NODES),
    database: process.env.MONGO_URI,
    fortniteKey: process.env.FORTNITE_KEY,
    spotifyClientId: process.env.CLIENT_ID_SPOTIFY,
    spotifyClientSecret: process.env.CLIENT_SECRET_SPOTIFY
}