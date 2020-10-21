const Command = require('../../Util/Command')

module.exports = class DocsCommand extends Command { 
    constructor(client) {
        super(client, {
            name: 'docs',
            aliases: ['djs', 'discordjs', 'discord.js'],
            description: 'Mostra a documentação do discord.js',
            category: 'Miscellaneous'
        })
    }

   async run(message, args, t) {
        const { MessageEmbed } = require("discord.js")
        const fetch = require("node-fetch")
    
        const [query, src] = args
        if (!query) return message.channel.send("https://discord.js.org")
    
        const embed = await (await fetch(`https://djsdocs.sorta.moe/v2/embed?src=${src || "stable"}&q=${query.replace(/#/g, ".")}`)).json()
        if (!embed || embed.error) return message.channel.send("<:xSweet:756989900661850182> | Não funcionou")
    
        const docEmbed = new MessageEmbed(embed)
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
        .setTitle(`Discord.js v12 (${args[1] || "Instável"})`)
        .setTimestamp()
    
        return message.channel.send(docEmbed)
    }
}
