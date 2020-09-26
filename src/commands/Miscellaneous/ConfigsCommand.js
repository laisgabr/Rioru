const { Command } = require('../../structure')

module.exports = class Configs extends Command {
    constructor (client) {
        super(client, {
            name: 'config',
            aliases: ['configs', 'configurações'],
            category: 'Miscellaneous'
        })
    }
   async run ({ channel, member, guild }) {
        const firebase = require('firebase')
        const database = firebase.database()
        if(!member.permissions.has(["MANAGE_GUILD", "ADMINISTRATOR"])) {
            return channel.send('<:xSweet:756989900661850182> | Você não tem as permissões `Gerenciar Servidor` e `Administrador` para continuar')
        }

        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
        .setDescription(`
        Use o comando \`SetPrefix\` para Mudar o Prefixo

Use o comando \`Bemvindo\` para Gerenciar o Sistema de Bem-Vindo

Use o comando \`Saida\`  para Gerenciar o Sistema de Saida

Use o comando \`Logs\` para Gerenciar o Sistema de Logs

Use o comando \`\` para Gerenciar o Sistema de Punições
        `)
        channel.send(embed)
  }
}
