const { MessageEmbed } = require('discord.js')

module.exports = class ZoeEmbed extends MessageEmbed {
    constructor(message) {
        this.setColor("#ef42ff")
        this.setFooter(message.author.username, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
    }
}