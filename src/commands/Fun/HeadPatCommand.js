const Command = require('../../Util/Command');

module.exports = class HeadPatCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'headpat',
            aliases: ['pat', 'cafuné', 'cafune'],
            description: 'Faça um cafuné no seu amigo',
            category: 'Fun'
        })
    }
    run(message, args, t) {
    const { ZoeEmbed } = require('../../Util')
    const superagent = require('superagent')

   const uuser = message.mentions.users.first() || this.client.users.cache.get(args[0]) || message.guild.members.cache.find(mem => mem.user.username === args.join(' '))

   if (!uuser) return message.channel.send('Please mention any user')

    superagent.get('https://nekos.life/api/v2/img/pat')
    .end((err, response) => {
        const embed = new ZoeEmbed()
        .setDescription(`${message.author} fez um cafuné em ${uuser}`)
        .setImage(response.body.url)
        message.channel.send(embed)
    })
    }
}