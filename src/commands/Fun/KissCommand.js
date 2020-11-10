const Command = require('../../Util/Command');

module.exports = class KissCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'kiss',
            aliases: ['beijar'],
            description: 'Beije seu(ua) Web Namorado(a)',
            category: 'Fun'
        })
    }
    run(message, args, t) {
        const superagent = require('superagent')
        
        const uuser = message.mentions.users.first() || this.client.users.cache.get(args[0]) || message.guild.members.cache.find(mem => mem.user.username === args.join(" "))
        if (!uuser) return message.channel.send("<:xSweet:756989900661850182> | Mencione alguém ou diga um id ou diga um username!")
        
        if (uuser.id === this.client.user.id) return message.channel.send("Quero te beijar nah")

        superagent.get('https://nekos.life/api/v2/img/kiss')
        .end((err, response) => {
            const embed = new Discord.MessageEmbed()
            .setDescription(`:heart: ${message.author} Beijou ${uuser} :heart:`)
            .setImage(response.body.url)
            message.channel.send(embed)
        })
    }
}