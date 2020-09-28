const Zoe = require('./src/Zoe')
const config = require('./config.js')
const zoe = new Zoe(config)
console.log('Meu .env foi configurado aguarde.....')

zoe.start()
