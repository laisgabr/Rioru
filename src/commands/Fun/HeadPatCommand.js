const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'headpat',
            aliases: ['pat', 'cafune', 'cafuné'],
            category: 'Fun'
        })
    }
   async run ({ channel, mentions, guild, args, author }) {
        const database = require('firebase').database()
    const db = await database.ref(`Servidores/${guild.id}/Locale`).once('value')
    
    if(db.val() === null) {
        database.ref(`Servidores/${guild.id}/Locale`).set({
            Language: "pt-BR"
        })
    }

    const lang = require(`../../locales/${db.val().Language}/Fun.json`)

        const Discord = require('discord.js')
    const superagent = require('superagent')

   const uuser = mentions.users.first() || this.client.users.cache.get(args[0]) || guild.members.cache.find(mem => mem.user.username === args.join(' '))

   if (!uuser) return channel.send(lang.HeadPat.headpat1)

    superagent.get('https://nekos.life/api/v2/img/pat')
    .end((err, response) => {
        const embed = new Discord.MessageEmbed()
        .setDescription(`${author} ${lang.HeadPat.headpat2} ${uuser}`)
        .setImage(response.body.url)
        .setColor('RANDOM')
        .setFooter(`${lang.solicitado} ${author.username}`, author.displayAvatarURL({ dynamic: true, size: 2048 }))
        channel.send(embed)
    })
  }
}
