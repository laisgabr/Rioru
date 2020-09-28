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
        Olá, Meu nome é Zoe e sou um Simples bot com Dezenas de Funcionalidades para você não ter que adicionar 10 bots em seu Servidor.

<:firebaseSweet:760198846285611079> [Firebase](https://firebase.google.com) | <:githubSweet:759108651339350046> [GitHub](https://github.com/MrGamingBR/Zoe) | <:NodeJs:723531306679533639> [Node](https://nodejs.org/pt-br)

Linguagem: <:JavascriptSweet:759108618305536051> JavaScript with <:NodeJs:723531306679533639> Node.js

:heart: Total de Servidores : \`${this.client.guilds.cache.size} Servidores\`

<:uzuarios:748352116506099787> Total de Usuários: \`${this.client.users.cache.size} Usuários\`

<:Canalkk:748351427981869066> Total de Canais: \`${this.client.channels.cache.size} Canais\`

<:NodeJs:723531306679533639> Versão do Node: \`${process.version}\`

📡 Latência da API: \`${Math.round(this.client.ws.ping)}\`

Links:
[Me adicione em seu Servidor](https://discord.com/api/oauth2/authorize?client_id=${this.client.user.id}&permissions=8&scope=bot)

[Servidor de Suporte](https://discord.gg/8eYxh49)

`)
.setThumbnail(this.client.user.displayAvatarURL({ format: 'png', dynamic: true }))
		.setFooter(author.username, author.displayAvatarURL({ dynamic: true, size: 2048 }))
		channel.send(embed)
    }
}
