const ZoeMainFile = require('./src/Zoe')
const config = require('./config')
const Zoe = new ZoeMainFile(config)

Zoe.initLoaders()
Zoe.connect()
