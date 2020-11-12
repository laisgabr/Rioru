const Command = require('../../Util/Command') 

module.exports = class BoobsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'boobs',
            aliases: [],
            category: 'Nsfw'
        })
    }
    run(message, args, t) {
        const { ZoeEmbed } = require('../../Util')
        const gif = this.client.nsfw.getBoobs()

        const embed = new ZoeEmbed()

        message.channel.send(gif)
    }
}