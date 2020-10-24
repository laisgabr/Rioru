const Command = require('../../Util/Command');

module.exports = class EndCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'end',
            aliases: [],
          //  description: '',
          //  category: ''
        })
    }
    run(message, args, t) {
        if(!args[0]){
            return message.channel.send(':x: You have to specify a valid message ID!');
        }
    
        let giveaway = 
        this.client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
        this.client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);
    
        if(!giveaway){
            return message.channel.send('Unable to find a giveaway for `'+ args.join(' ') + '`.');
        }
    
        this.client.giveawaysManager.edit(giveaway.messageID, {
            setEndTimestamp: Date.now()
        })
        .then(() => {
            message.channel.send('Giveaway will end in less than '+ '5' +' seconds...');
        })
        .catch((e) => {
            if(e.startsWith(`Giveaway with message ID ${giveaway.messageID} is already ended.`)){
                message.channel.send('This giveaway is already ended!');
            } else {
                console.error(e);
                message.channel.send('An error occured...');
            }
        });
    }
}