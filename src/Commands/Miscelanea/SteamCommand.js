module.exports = {
    config: {
        name: "steam",
        aliases: [],
        description: '',
        category: "Miscelanea"
    },
    run: async(client, message, args) => {
        var steam = require('steam-provider') 
        var provider = new steam.SteamProvider();
        const { MessageEmbed } = require('discord.js')

        if(!args.join(" ")) {
        return message.reply("Voce não disse um jogo da Steam")
    }

    provider.search(args.join(" ")).then(result => { 
    provider.detail(result[0].id, 1, "portuguese", "pt").then(results => { 
        let other = results.otherData
        const embed = new MessageEmbed()
        .setTitle(results.name)
        .setDescription(`\n\n**GÊNERO**: ${results.genres.join(', ')}\n
**PLATAFORMA(S)**: ${other.platforms.join(', ')}\n
**CARACTERÍSTICAS**: ${other.features.join(', ')}\n
\n**DESENVOLVEDOR(ES)**: ${other.developer.join(', ')}`)
        .setThumbnail(other.imageUrl)
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
        .setColor("RED");
        message.channel.send(embed)
    })
})
    }
}