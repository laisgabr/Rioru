const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'yaoi',
            aliases: [],
            category: 'NSFW +18',
            nsfwChannelOnly: true
        })
    }
    run ({ channel, author }) {
        const { MessageEmbed } = require('discord.js')
        const superagent = require('superagent')
        superagent.get('http://tnai.herokuapp.com/hentai/yaoi')
        .end((err, response) => {
            const embed = new MessageEmbed()
            .setDescription(`Não consegue ver? [Clique aqui](${response.body.url})`)
            .setImage(response.body.url)
              .setThumbnail(author.displayAvatarURL({ dynamic: true }))
              .setColor('RANDOM')
              .setFooter(`Solicitado por ${author.username}`)
            channel.send(embed)
        })
    }
}
