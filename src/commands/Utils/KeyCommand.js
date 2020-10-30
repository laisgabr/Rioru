const Command = require('../../Util/Command')

module.exports = class KeyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'key',
            aliases: [],
            description: '',
            category: ''
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
        
        const dbb = await this.client.database.UserSchema.findOne({ '_id': message.author.id })
        dbb.premiumStats = true
        dbb.save()

        message.channel.send('Premium ativado com sucesso')
    }
}