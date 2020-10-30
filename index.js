const ZoeFileStart = require('./src/Zoe')
const config = require('./config')

const Zoe = new ZoeFileStart(config, { disableEveryone: true, fetchAllMembers: true })

Zoe.loadCommands('./src/commands')

setTimeout(() => {
Zoe.loadEvents('./src/Events/Client')
Zoe.loadLavalinkEvents('./src/Events/Lavalink')
Zoe.start()
}, 2 * 1000) // 2 minutes
