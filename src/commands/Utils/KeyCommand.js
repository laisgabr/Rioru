const Command = require('../../Util/Command')

module.exports = class KeyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'key',
            aliases: []
        })
    }
   async run (message, args, t) {
        if(!args.join(' ')) {
            return message.channel.send('Diga uma Key para mim procurar em meu sistema')
        }

        const db = await this.client.database.KeySchema.findOne({ '_id': args.join(' ') })

        if(!db) {
            return message.channel.send('Essa Key não existe!')
        }
    }
}