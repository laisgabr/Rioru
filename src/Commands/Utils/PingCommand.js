const { Command, ZoeEmbedBuilder } = require('../../')

module.exports = class PingCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            aliases: ['pong'],
            description: 'Mostra o meu Ping',
            usage: '<prefix>ping',
            category: 'Miscellaneous',
            cooldown: 5
        })
    }

    execute(client, msg, zoe, args, t) {
        const embed = new ZoeEmbedBuilder(msg.author)
        embed.setTitle(`aa`)
        
        msg.channel.createMessage({ embed: embed })
     // msg.channel.createMessage(t('Utils:PingCommand.Sucess', { ping: client.shards.get(msg.channel.guild.shard.id).latency }))
    }
}