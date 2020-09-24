const Sweet = require('./src/Sweet')
const config = require('./config.js')
const client = new Sweet(config)

client.start()