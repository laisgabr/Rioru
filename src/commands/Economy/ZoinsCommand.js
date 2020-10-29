const Command = require('../../Util/Command');

module.exports = class ZoinsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'zoins',
            aliases: ['atm', 'bal', 'balance'],
            description: 'Mostra o seu total de Zoins',
            category: 'Economy'
        })
    }
   async run(message, args, t) {
       const user = message.mentions.users.first() || this.client.users.cache.get(args[0]) || message.author
        
       const db = await this.client.database.UserSchema.findOne({ '_id': user.id })
       
       const zoins = db.zoins
       
    if(user.id === message.author.id) {
        message.channel.send(t())
    }
 }
}