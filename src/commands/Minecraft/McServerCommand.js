const { MessageEmbed } = require("discord.js")

const request = require("request")

const moment = require("moment")
require("moment-duration-format")

const Command = require('../../Util/Command')

module.exports = class McServerCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'mcserver',
            aliases: ['mineserver', 'minecraftserver'],
            description: 'Mostra status de um Servidor de Minecraft',
            category: 'Minecraft'
        })
    }
    run(message, args, t) {
        
    }
}