/* eslint-disable quotes */
/* eslint-disable lines-between-class-members */
/* eslint-disable indent */
const { Command } = require('../../structure')

module.exports = class DocsCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'docs',
            aliases: ['djs', 'discord.js'],
            description: 'Veja sobre algo da Docs do discord.js',
            usage: '<prefix>docs voice | <prefix>docs MessageEmbed',
            category: 'Miscellaneous'
        })
    }
    async run ({ channel, args, author }) {
    const { MessageEmbed } = require("discord.js")
    const fetch = require("node-fetch")

    const [query, src] = args
    if (!query) return channel.send("https://discord.js.org")

    const embed = await (await fetch(`https://djsdocs.sorta.moe/v2/embed?src=${src || "stable"}&q=${query.replace(/#/g, ".")}`)).json()
    if (!embed || embed.error) return channel.send("<:xSweet:756989900661850182> | Não funcionou")

    const docEmbed = new MessageEmbed(embed)
    .setAuthor(author.tag, author.displayAvatarURL({ dynamic: true, size: 2048 }))
    .setTitle(`Discord.js v12 (${args[1] || "Instável"})`)
    .setTimestamp()

    return channel.send(docEmbed)
    }
}
