const Command = require('../../Util/Command');

module.exports = class HugCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hug',
            aliases: ['abracar', 'abraçar', 'abraço'],
            description: 'Dê um Abraço no(a) seu(ua) amigo(a)',
            category: 'Fun'
        })
    }
    run(message, args, t) {
    const { ZoeEmbed } = require('../../Util')
    const superagent = require('superagent')
    const uuser = message.mentions.users.first() || this.client.users.cache.get(args[0]) || message.guild.members.cache.find(mem => mem.user.username === args.join(' '))

    if (!uuser) return message.channel.send('<:xSweet:756989900661850182> | Mencione alguém ou diga um id ou diga um username!')

    superagent.get('https://nekos.life/api/v2/img/hug')
    .end((err, response) => {
        const embed = new ZoeEmbed()
        .setDescription(`${message.author} deu um abraço em ${uuser}`)
        .setImage(response.body.url)
        message.channel.send(embed)
    })
    }
}