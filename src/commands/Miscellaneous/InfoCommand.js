/* eslint-disable no-tabs */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'info',
            aliases: ['botinfo'],
            category: 'Miscellaneous'
        })
    }
    run ({ channel, author }) {
        const { MessageEmbed } = require('discord.js')

		const embed = new MessageEmbed()
		.setTitle('Informações sobre Mim')
		.setDescription(`
         Total de Servidores : \`${this.client.guilds.cache.size} Servidores\`
         
Total de usuários: \`${this.client.users.cache.size} Usuários\`

Total de Canais: \`${this.client.channels.cache.size} Canais\`

Versão do Node: \`${process.version}\`

Versão do discord.js: \`v12.3.1\`

Latencia da API: \`${Math.round(this.client.ws.ping)}\`


Links Importantes:

[Me adicione em seu Servidor](https://discord.com/api/oauth2/authorize?client_id=${this.client.user.id}&permissions=8&scope=bot)

[Servidor de Suporte](https://discord.gg/8eYxh49)`)
.setThumbnail(this.client.user.displayAvatarURL({ format: 'png', dynamic: true }))
		.setFooter(author.username, author.displayAvatarURL({ dynamic: true, size: 2048 }))
		channel.send(embed)
    }
}
