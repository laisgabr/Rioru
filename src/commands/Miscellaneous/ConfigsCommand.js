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
        Clique em <:numero1Sweet:757455325405118526> para Mudar o Prefixo

Clique em <:numero2Sweet:757455416920637550> para Gerenciar o Sistema de Bem-Vindo

Clique em <:numero3Sweet:757455488089587812> para Gerenciar o Sistema de Saida

Clique em <:numero4Sweet:757455776498450455> para Gerenciar o Sistema de Logs

Clique em <:numero5Sweet:757455795959889990> para Gerenciar o Sistema de Punições
        `)
        channel.send(embed).then(async msge => {

    msge.react('757455325405118526')
    msge.react('757455416920637550')
    msge.react('757455488089587812')
    msge.react('757455776498450455')
    msge.react('757455795959889990')        

   const prefixo = (reaction, user) => reaction.emoji.id === '757455325405118526' && user.id === author.id
   const bemvindo = (reaction, user) => reaction.emoji.id === '757455416920637550' && user.id === author.id
   const saida = (reaction, user) => reaction.emoji.id === '757455488089587812' && user.id === author.id
   const log = (reaction, user) => reaction.emoji.id === '757455776498450455' && user.id === author.id
   const punicao = (reaction, user) => reaction.emoji.id === '757455795959889990' && user.id === author.id

   const pre = msge.createReactionCollector(prefixo)
   const welcome = msge.createReactionCollector(bemvindo)
   const bye = msge.createMessageCollector(saida)
   const logs = msge.createMessageCollector(log)
   const punishment = msge.createMessageCollector(punicao)

   pre.on('collect', async r => {
    const dbPrefix = await database.ref(`Servidores/${guild.id}/Configs`).once('value')
    const EmbedPrefix = new MessageEmbed()
       .setDescription(`
       Meu Prefixo em ${guild.name} está setado como \`${dbPrefix.val().prefix}\`

       Para alterar o Prefixo, Reaja com  .
       `)
       msge.react('')


   })

    })
  }
}