const { Command } = require('../../structure')

module.exports = class AvatarCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'avatar',
      aliases: ['av'],
      description: 'Mostra o Avatar seu ou de Algum user',
      usage: '<prefix>avatar | <prefix>av @MrGamingBR',
      category: 'Miscellaneous'
    })
  }

 async run ({ channel, mentions, args, author, client }) {
  const { MessageEmbed } = require('discord.js')
  const user = args[0] ? mentions.users.first() || await client.users.fetch(args[0]).catch(_ => author) : author
  let avatar = user.displayAvatarURL({ dynamic: true, size: 4096 })

   if (user.avatar.starsWith('a_')) avatar = avatar.replace('.webp', '.gif');
   if(!user.avatar.startsWith('a_')) avatar = avatar.replace('.webp', '.png')

   const embed = new MessageEmbed()
    .setDescription(`:frame_photo: Avatar de [${user.username}](${avatar})`)
    .setImage(avatar)
    .setColor("RANDOM")
    .setFooter(`• Solicitado por: ${author.username}`)
    channel.send(embed)
  }
}
