const { Command } = require('../../structure')

module.exports = class Configs extends Command {
    constructor (client) {
        super(client, {
            name: 'config',
            aliases: ['configs', 'configurações'],
            category: 'Miscellaneous'
        })
    }
    run ({ channel, member }) {
        if(!member.permissions.has(["MANAGE_GUILD", "ADMINISTRATOR"])) {
            return channel.send('<:xSweet:756989900661850182> | Você não tem as permissões `Gerenciar Servidor` e `Administrador` para continuar')
        }

        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
        .setDescription(`
        Clique em '' para Mudar o Prefixo

Clique em '' para Gerenciar o Sistema de Bem-Vindo

Clique em '' para Gerenciar o Sistema de Saida

Clique em '' para Gerenciar o Sistema de Logs
        `)
        channel.send(embed).then(async msge => {

    msge.react('')        

   const sim = (reaction, user) => reaction.emoji.id === '' && user.id === author.id
   const no = (reaction, user) => reaction.emoji.id === '' && user.id === author.id
   const collectorDaMsg = msge.createReactionCollector(sim)
   const collectorNo = msge.createReactionCollector(no)


        const collector = channel.createMessageCollector(m => {
            return m.author.id === author.id

        }, { time: 60000, max: 1 });

        collector.on("collect", m => {
            if (m.content.toLowerCase() === '1' || m.content.toLowerCase() === '2' || m.content.toLowerCase() === '3' || m.content.toLowerCase() === '4' || m.content.toLowerCase() === '5' || m.content.toLowerCase() === '6' || m.content.toLowerCase() === '7' || m.content.toLowerCase() === '8') {
              
              m.delete({ timeout: 3000 })
              let msg = m.content;
            if (msg.toLowerCase() === 'cancel' || msg.toLowerCase() === 'cancelar') return collector.stop('Cancelado');
            }
        });

        collector.on("end", (_, reason) => {
            if (["time", "Cancelado"].includes(reason)) return channel.send("Seleção de Música cancelada")
        });
    })
  }
}