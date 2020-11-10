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
        message.channel.send(this.client.nsfw.getBoobs())
        const embed = new ZoeEmbed()
        .setTitle('AAAAA')
        message.channel.send(embed)
    }
}