/* eslint-disable indent */
/* eslint-disable quotes */
const { Client, Collection } = require('discord.js')
const Loaders = require('./loader')
const firebase = require('firebase')
const dbconfig = require('../config.json')

async function tnaiStart () {
const Tnai = require('tnai')
const tnai = new Tnai()
console.log(await tnai.real.traps())
}

tnaiStart()

module.exports = class Bot extends Client {
  constructor (options = {}) {
    super(options)
    this.token = options.token
    this.config = {
      owners: options.owners,
      prefixes: options.prefixes,
      nodes: options.nodes,
      database: options.database
    }
    var firebaseConfig = {
      apiKey: dbconfig.apiKey,
      authDomain: dbconfig.authDomain,
      databaseURL: dbconfig.databaseURL,
      projectId: dbconfig.projectId,
      storageBucket: dbconfig.storageBucket,
      messagingSenderId: dbconfig.messagingSenderId,
      appId: dbconfig.appId,
      measurementId: dbconfig.measurementId
    }
    firebase.initializeApp(firebaseConfig)

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
