
const { Command } = require('../../structure')

module.exports = class LevelCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'level',
            aliases: [],
            category: 'Miscellaneous'
        })
    }
   async run ({ channel, author, guild, args, mentions }) {
 const { MessageEmbed } = require('discord.js')
 const firebase = require('firebase')
 const database = firebase.database()

 const uuser = mentions.users.first() || this.client.users.cache.get(args[0]) || author

 const db = await database.ref(`Servidores/${guild.id}/Levels/${uuser.id}`).once('value')
 const level = db.val().level
 const xp = db.val().xp
 const messages = db.val().message

 if (uuser.id === author.id) {
     const embedAuthor = new MessageEmbed()
     .setDescription(`
     ${author}, Você tem...

     **XP:**
     ${xp}

     **LEVEL:**
     ${level}

     **MENSAGENS ENVIADAS NESSE SERVIDOR:**
     ${messages} Mensagens
     `)
     .setThumbnail(author.displayAvatarURL({ dynamic: true }))
     return channel.send(embedAuthor)
 }

 const embed = new MessageEmbed()
 .setDescription(`
 ${author}, Mostrando dados de ${uuser}....

 **XP:**
 ${xp}

 **LEVEL:**
 ${level}

 **MENSAGENS ENVIADAS NESSE SERVIDOR:**
 ${messages} Mensagens
 `)
 channel.send(embed)
    }
}
