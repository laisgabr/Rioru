const Command = require('../../Util/Command')

module.exports = class AvatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'avatar',
            aliases: ['av'],
            description: 'Mostra o seu avatar ou do seu amigo',
            category: 'Miscellaneous'
        })
    }
   async run(message, args, t) {
    const { MessageEmbed } = require('discord.js')
    const user = message.mentions.users.first() || this.client.users.cache.get(args[0]) || message.author
    let avatar = user.displayAvatarURL({ dynamic: true, size: 4096 })

    if (user.avatar.startsWith('a_')) avatar = avatar.replace('.webp', '.gif');
    if(!user.avatar.startsWith('a_')) avatar = avatar.replace('.webp', '.png')

    const embed = new MessageEmbed()
    .setDescription(`:frame_photo: | Avatar de [${user.username}](${avatar})`)
    .setImage(avatar)
    .setColor("RANDOM")
    .setFooter(`• | Solicitado por ${message.author.username}`)
    message.channel.send(embed)
    }
}
