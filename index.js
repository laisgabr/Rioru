const Sweet = require('./src/Sweet')
const config = require('./config.js')
const client = new Sweet(config)
console.log('Meu .env foi configurado aguarde.....')

client.start()
