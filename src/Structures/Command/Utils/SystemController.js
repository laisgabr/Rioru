const { AntiRaid, AntiSpam, AntiFlood, AntiLink, AntiBot } = require('../../../')
module.exports = class SystemController {
    constructor(client, msg, translate) {
        this.client = client;
        this.msg = msg;
        this.translate = translate;
        
        const Collection = require('@discordjs/collection')
        this.collectionRaid = new Collection()
        
        this.antiRaidStats = this.collectionRaid
    }
    
    antiRaid() {
        new AntiRaid()
    }
    
    antiBots()  {
        
    } 
} 