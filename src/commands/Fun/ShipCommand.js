const { Command } = require('../../structure')

module.exports = class ShipCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'ship',
            aliases: [],
            category: 'Fun'
        })
    }
    run ({ channel, mentions, args }) {
        const { MessageEmbed } = require('discord.js')

        const user = mentions.users.first() 
        const user2 = mentions.users.first(1)

        if(!user) {
            user = args[0]
            if(!args[0]) return channel.send('Você não disse um Nome ou Mencionou Alguém!')
        }

        if(!user2) {
            user2 = args[1]
            if(!args[1]) return channel.send('Você não disse uma Segunda Pessoa!')
        }

        const ship = Math.floor(Math.random() * 100) + 1;

        if(ship <= 50) {
            const embed1 = new MessageEmbed()
            .setColor("RED")
            .setDescription(`
        Eu acho que ${user} e ${user2} não vai dar Certo!
:broken_heart: ${ship}% :broken_heart:            
        `)
        channel.send(embed1)
        } else if (ship === 100) {
            const nomeMod = user.username - user2.username
            const embed2 = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`
            Casal Mais Perfeito que eu :yum: !
${nomeMod}

:heart: ${ship}% :heart        
        `)
        channel.send(embed2)
        } else {
            const embed3 = new MessageEmbed()
            .setColor("AQUA")
            .setDescription(`
        Só precisa o(a) ${user2} deixar de ser timido(a)
                       
:heart: ${ship}% :heart    
            `)
            channel.send(embed3)
        }


    } 
}
