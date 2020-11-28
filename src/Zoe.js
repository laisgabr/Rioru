const { Client } = require('eris')
const { ZoeEmojis, Mongoose, ZoeManager } = require('./')
const Loaders = require('./Loaders')
const Collection  = require('@discordjs/collection')

module.exports = class ZoeClient extends Client {
  constructor(options = {}) {
    super(options.token, options)
    
    this.token = options.token;
    this.database = new Mongoose(this, options.mongo)
    
    this.clientEmojis = new ZoeEmojis(this)
    
    this.settings = {
      owners: options.owners,
      nodes: options.nodes,
      mongo: options.mongo,
      fortnitekey: options.fortnitekey
    }
    
    this.commands = new Collection()
    this.aliases = new Collection()
    this.cooldown = new Collection()
    
    /*
    this.music = new ZoeManager(this, this.settings.nodes, { 
      
     })
    */
  }
  
  async initLoaders() {
    for (const Loader of Object.values(Loaders)) {
      try {
        new Loader(this)
      } catch (e) {
        console.error(e)
      }
    }
  }
}