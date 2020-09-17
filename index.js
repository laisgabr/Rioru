const Bot = require('./src/Bot.js')
const config = require('./config.js')

const client = new Bot(config)

client.start()
