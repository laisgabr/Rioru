/* eslint-disable indent */
const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'trigged',
            aliases: [],
            category: 'Fun'
        })
    }
   // eslint-disable-next-line lines-between-class-members
   async run ({ channel, author, mentions, args }) {
    const Discord = require('discord.js')
    const superfetch = require('node-superfetch')

  console.log(author)  
  var user = mentions.users.first() || this.client.users.cache.get(args[0]) || author
  const { body } = await superfetch.get(`https://eclyssia-api.tk/api/v1/triggered?url=${user.avatar}`)
  const attachment = new Discord.Attachment(body, 'Trigged.gif')
  await channel.send(attachment)
    }
}
