import ZoeClient from "./src/Zoe.js"
import settings from "./config.ts"
const Zoe = new ZoeClient(settings.token)

Zoe.start()