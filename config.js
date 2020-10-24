const { config } = require('dotenv')
config({
   path: __dirname + "/.env"
});

module.exports = {
    disableEveryone: true,
    fetchAllMembers: true,

    token: process.env.BOT_TOKEN,
    owners: JSON.parse(process.env.OWNERS),
    nodes: JSON.parse(process.env.LAVALINK_NODES),
    database: process.env.MONGO_URI,
    fortniteKey: process.env.FORTNITE_KEY,
    spotifyClientId: process.env.CLIENT_ID_SPOTIFY,
    spotifyClientSecret: process.env.CLIENT_SECRET_SPOTIFY
}