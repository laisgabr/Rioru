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
    .setDescription(t('commands:AvatarCommand.Response', { UserName: user.username, UserAvatar: avatar }))
    .setImage(avatar)
    .setColor("RANDOM")
    .setFooter(message.author.username, message.author.displayAvatarURL({dynamic:true}))
    message.channel.send(embed)
    }
}
