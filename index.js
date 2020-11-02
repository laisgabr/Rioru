const ZoeFileStart = require('./src/Zoe')
const config = require('./config')

const Zoe = new ZoeFileStart(config)

Zoe.initialize()