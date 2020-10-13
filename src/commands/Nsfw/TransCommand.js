const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'trans',
            aliases: [],
            category: 'NSFW +18',
            nsfwChannelOnly: true
        })
    }
    run ({ channel, author }) {
        const { MessageEmbed } = require('discord.js')
            const superagent = require('superagent')
           
            superagent.get('http://tnai.herokuapp.com/real/traps')
            .end((err, response) => {
                const embed = new MessageEmbed()
                .setDescription(`Não consegue ver? [Clique aqui](${response.body.url})`)
                .setImage(response.body.url)
                  .setColor('RANDOM')
                  .setThumbnail(author.displayAvatarURL({ dynamic: true }))
                .setFooter(`Solicitado por ${author.username}`, author.displayAvatarURL({ dynamic: true, size: 2048 }))
                channel.send(embed)
               })
            
    }
}
