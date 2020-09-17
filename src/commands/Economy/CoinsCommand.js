/* eslint-disable indent */
const { Command } = require('../../structure')

module.exports = class CoinsCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'coins',
            aliases: ['moedas'],
            category: 'Economy'
        })
    }
    // eslint-disable-next-line lines-between-class-members
   async run ({ channel, mentions, args, author }) {
        const firebase = require('firebase')
        const database = firebase.database()

     const uuser = mentions.users.first() || this.client.users.cache.get(args[0]) || author

      const db = await database.ref(`Global/Economia/${uuser.id}`).once('value')
     if (db.val() === null || db.val().Coins === null) {
         database.ref(`Global/Economia/${uuser.id}`).set({
             Coins: 0
         })
     }

     const coins = db.val().Coins

      const { MessageEmbed } = require('discord.js')

      if (uuser.id === author.id) {
          const embedAuthor = new MessageEmbed()
          .setColor('GREEN')
          .setThumbnail(uuser.displayAvatarURL({ dynamic: true, size: 2048 }))
          .setDescription(`
          ${author}, Mostrando seu total de Moedas....
          
Você possui ${coins} Moedas
          `)
          .setFooter(`Solicitado por ${author.username}`, author.displayAvatarURL({ dynamic: true, size: 2048 }))
          channel.send(embedAuthor)
      } else {
          const embed = new MessageEmbed()
          .setColor('GREEN')
          .setThumbnail(uuser.displayAvatarURL({ dynamic: true, size: 2048 }))
          .setDescription(`
          ${author}, 
          
O(A) usuário(a) ${uuser} possui o Total de:

${coins} Moedas
          `)
          .setFooter(`Solicitado por ${author.username}`, author.displayAvatarURL({ dynamic: true, size: 2048 }))
          channel.send(embed)
      }
    }
}
