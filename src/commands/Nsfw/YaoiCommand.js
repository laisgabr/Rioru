const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'yaoi',
            aliases: [],
            category: 'NSFW +18'
        })
    }
    run ({ channel, author }) {
        if (channel.nsfw === true) {
        const { MessageEmbed } = require('discord.js')
        const superagent = require('superagent')
        superagent.get('http://tnai.herokuapp.com/h/yaoi')
        .end((err, response) => {
            const embed = new MessageEmbed()
            .setDescription(`Não consegue ver? [Clique aqui](${response.body.url})`)
            .setImage(response.body.url)
              .setThumbnail(author.displayAvatarURL({ dynamic: true }))
              .setColor('RANDOM')
              .setFooter(`Solicitado por ${author.username}`)
            channel.send(embed)
        })
    } else {
        channel.send(`Por favor, Faça os passos do Gif caso queira usar esse comando!`,{ files: [{ attachment: './Assets/NSFW.gif', name: 'NotSafeForWork.gif' }] })
    }
    }
}
