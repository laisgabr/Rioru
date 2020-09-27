const { Command } = require('../../structure')

module.exports = class SystemConfigCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'systemconfig',
      aliases: [],
      category: 'Configuration'
    })
  }
  run ({ channel }) {
    channel.send('Em construção..')
  }
}
