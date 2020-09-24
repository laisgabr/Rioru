const { Command } = require("../../structure")

module.exports = class SteamCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'steam',
            aliases: [],
            description: 'Mostra informações sobre um Jogo da Steam',
            usage: '<prefix>steam Injustice',
            category: 'Miscellaneous'
        })
    }
    run ({ channel, args, author }) {
        var steam = require('steam-provider') 
        var provider = new steam.SteamProvider()
        const { MessageEmbed } = require('discord.js')

        if (!args.join(" ")) {
        return channel.send("<:xSweet:756989900661850182> | Você não disse um jogo da Steam")
    }

    provider.search(args.join(" ")).then(result => { 
    provider.detail(result[0].id, 1, "portuguese", "pt").then(results => { 
        const other = results.otherData
        const embed = new MessageEmbed()
        .setTitle(results.name)
        .setDescription(`\n\n**GÊNERO**: ${results.genres.join(', ')}\n
**PLATAFORMA(S)**: ${other.platforms.join(', ')}\n
**CARACTERÍSTICAS**: ${other.features.join(', ')}\n
\n**DESENVOLVEDOR(ES)**: ${other.developer.join(', ')}`)
        .setThumbnail(other.imageUrl)
        .setFooter(author.tag, author.displayAvatarURL({ dynamic: true, size: 2048 }))
        .setColor("RED")
        channel.send(embed)
        })
      })
    }
}
