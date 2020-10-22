const Command = require('../../Util/Command');
const emj = require('../../API/connectEmoji');

module.exports = class ReRollCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'reroll',
            aliases: [],
           description: '',
            UserPermission: ['MANAGE_MESSAGES'],
            category: ''
        })
    }
    run(message, args, t) {
        if(!args[0]){
            return message.channel.send(':x: You have to specify a valid message ID!');
        }
    
        let giveaway = 
        client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
        client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);
    
        if(!giveaway){
            return message.channel.send('Unable to find a giveaway for `'+ args.join(' ') +'`.');
        }
    
        this.client.giveawaysManager.reroll(giveaway.messageID)
        .then(() => {
            
            message.channel.send('Giveaway rerolled!');
        })
        .catch((e) => {
            if(e.startsWith(`Giveaway with message ID ${giveaway.messageID} is not ended.`)){
                message.channel.send('This giveaway is not ended!');
            } else {
                console.error(e);
                message.channel.send('An error occured...');
            }
        });
    
    }
}