const ZoeFileStart = require('./src/Zoe')
const config = require('./config')

const Zoe = new ZoeFileStart(config)

require('./src/Dashboard/app')

Zoe.initialize()
Zoe.startDashboard()