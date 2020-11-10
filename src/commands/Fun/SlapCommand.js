const Command = require('../../Util/Command');

module.exports = class SlapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'slap',
            aliases: ['tapa'],
            description: 'Alguém te irritou ? Violência resolve tudo rs',
            category: 'Fun'
        })
    }
    run(message, args, t) {
        const { ZoeEmbed } = require('../../Util')
        const superagent = require('superagent')

        const uuser = message.mentions.users.first() || this.client.users.cache.get(args[0]) || message.guild.members.cache.find(mem => mem.user.username === args.join(" "))
     
        if (!uuser) return message.channel.send("<:xSweet:756989900661850182> | Mencione alguém ou diga um id ou diga um username!")
     
        if (uuser.id === this.client.user.id) {
         superagent.get('https://nekos.life/api/v2/img/slap')
         .end((err, response) => {
             const embedA = new ZoeEmbed()
             .setDescription(`${this.client.user} Deu um tapa bem merecido em ${message.author}`)
             .setImage(response.body.url)
             message.channel.send(embedA)
           })
        } else {
         superagent.get('https://nekos.life/api/v2/img/slap')
         .end((err, response) => {
             const embed = new MessageEmbed()
             .setDescription(`${message.author} Deu um tapa em ${uuser}`)
             .setImage(response.body.url)
             message.channel.send(embed)
         })
        }
    }
}