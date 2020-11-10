const Command = require('../../Util/Command');

module.exports = class RemoveZoeinsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'removezoins',
            aliases: ['removerzoins'],
            category: 'Developer'
        })
    }
    run(message, args, t) {
        const user = message.mentions.users.first() || this.client.users.cache.get(args[0])

        const numberCoins = args[1]
        if(isNaN(Number(numberCoins))) {
            return message.channel.send('Diga um número')
        }

        const db = await this.client.database.UserSchema.findOne({ '_id': user.id })

        db.zoins = db.zoins - Number(args[0])
        db.save()
    }
}