const { Command } = require('../../structure')

module.exports = class ConfigsCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'configs',
      aliases: [],
      category: 'Configuration'
    })
  }
  run ({ channel, member }) {
    if(!member.permissions.has(["MANAGE_GUILD", "ADMINISTRATOR"])) {
      return channel.send('<:xSweet:756989900661850182> | Você não tem as permissões `Gerenciar Servidor` e `Administrador` para continuar')
    }

  }
}
