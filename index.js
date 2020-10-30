const { Intents } = require('discord.js')

const ZoeFileStart = require('./src/Zoe')
const config = require('./config')

const Zoe = new ZoeFileStart(config, { disableEveryone: true, fetchAllMembers: true, ws: { intents: Intents.ALL }})

Zoe.loadCommands('./src/commands')

setTimeout(() => {
Zoe.loadEvents('./src/Events/Client')
Zoe.loadLavalinkEvents('./src/Events/Lavalink')
Zoe.start()
}, 2 * 1000) // 2 minutes
