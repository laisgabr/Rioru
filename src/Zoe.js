const { Client, Collection } = require('discord.js')
const Loaders = require('./loader')
const firebase = require('firebase')
const { ErelaClient } = require('erela.js')
const { LavalinkLoader } = require('./loader')

module.exports = class ZoeClient extends Client {
  constructor (options = {}) {
    super(options)
    this.token = options.token
    this.config = {
      owners: options.owners,
      prefixes: options.prefixes,
      nodes: options.nodes,
      dbConfig: options.dbConfig
    }

    var firebaseConfig = {
      apiKey: this.config.dbConfig,
      authDomain: this.config.dbConfig,
      databaseURL: 'https://asuna-a3d7a.firebaseio.com',
      projectId: this.config.dbConfig,
      storageBucket: this.config.dbConfig,
      messagingSenderId: this.config.dbConfig,
      appId: this.config.dbConfig,
      measurementId: this.config.dbConfig
    }
    firebase.initializeApp(firebaseConfig);
    
    this.database = firebase.database()
    this.commands = new Collection()
  }

  async initLoaders () {
    for (const Loader of Object.values(Loaders)) {
      const loader = new Loader(this)
      try {
        await loader.load()
      } catch (err) {
        console.error(err)
      }
    }
  }

  start () {
    this.initLoaders()
    super.login(this.token)
    return this
  }
}
