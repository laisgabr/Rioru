const { Command } = require('../../structure')

module.exports = class DivCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'div',
            aliases: ['divulgação'],
            category: 'Miscellaneous'
        })
    }
    run ({ channel, mentions, author, guild }) {
        const { MessageEmbed } = require('discord.js')
        
        var user = mentions.users.first()
        if(!user) user = author 

        const targetInvites = await guild.fetchInvites()

        var invitesUses = 0.

        targetInvites.forEach(invite => {
            if (invite.inviter.id === user.id) {
                invitesUses += invite.uses
            }
        });

        const embed = new MessageEmbed()
        .setThumbnail(user.displayAvatarURL({ dynamic: true }))
        .setColor("AQUA")
        .setTitle("Nick: " + user)
        .setDescription(`
        Membros Convidados por ${user}:
${invitesUses} Membros       
        `)
        channel.send(embed)
    }
}
