/* eslint-disable no-useless-escape */
/* eslint-disable lines-between-class-members */
/* eslint-disable indent */
const { Command } = require('../../structure')

module.exports = class SkipCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'skip',
            aliases: ['pular'],
            usage: '<prefix>skip',
            description: 'Cansou da música ? Pule ela!',
            category: 'Music'
        })
    }
   async run ({ channel, guild }) {
    /*
    guild.music.stop()
       channel.send(' | Música pulada com sucesso.')
    */
  }
}
