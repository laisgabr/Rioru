/* eslint-disable indent */
const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'yaoi',
            aliases: [],
            category: 'NSFW +18'
        })
    }
    // eslint-disable-next-line lines-between-class-members
    run ({ channel }) {
        if (channel.nsfw === true) {
        const { MessageEmbed } = require('discord.js')
        const superagent = require('superagent')
        superagent.get('http://tnai.herokuapp.com/h/yaoi')
        // eslint-disable-next-line handle-callback-err
        .end((err, response) => {
            const embed = new MessageEmbed()
            .setDescription(`Não consegue ver a imagem ou o gif ? [Clique aqui](${response.body.url})`)
            .setImage(response.body.url)
              .setColor('RANDOM')
            channel.send(embed)
        })
    } else {
        channel.send({ files: [{ attachment: './Assets/NSFW.gif', name: 'NotSafeForWork.gif' }] })
    }
    }
}
