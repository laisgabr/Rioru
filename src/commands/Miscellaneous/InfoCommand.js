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
        Olá, Meu nome é Sweet Bot e sou um Simples bot com Dezenas de Funcionalidades para você não ter que adicionar 10 bots em seu Servidor.

Me adicione em seu Servidor [Clicando Aqui](https://discord.com/api/oauth2/authorize?client_id=${this.client.user.id}&permissions=8&scope=bot)

[Servidor de Suporte](https://discord.gg/8eYxh49)

Minha Linguagem é JavaScript. 

[GitHub](https://github.com/MrGamingBR/SweetBot)
               

Total de Servidores : \`${this.client.guilds.cache.size} Servidores\`
    
Total de usuários: \`${this.client.users.cache.size} Usuários\`

Total de Canais: \`${this.client.channels.cache.size} Canais\`

Versão do Node: \`${process.version}\`

Versão do discord.js: \`v12.3.1\`

Latencia da API: \`${Math.round(this.client.ws.ping)}\`

`)
.setThumbnail(this.client.user.displayAvatarURL({ format: 'png', dynamic: true }))
		.setFooter(author.username, author.displayAvatarURL({ dynamic: true, size: 2048 }))
		channel.send(embed)
    }
}
