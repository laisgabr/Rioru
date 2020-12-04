module.exports = class AntiSpam {
    constructor(client, message) {
        this.client = client;
        
        const AntiSpam = require('discord-anti-spam');
        
        const antiSpam = new AntiSpam({
            warnThreshold: 3, 
            kickThreshold: 7,
            banThreshold: 7,
            maxInterval: 2000, 
            warnMessage: translate('{@user}, Please stop spamming.'), 
            kickMessage: '**{user_tag}** has been kicked for spamming.', 
            banMessage: '**{user_tag}** has been banned for spamming.',
            maxDuplicatesWarning: 7,
            maxDuplicatesKick: 10,
            maxDuplicatesBan: 12, 
            exemptPermissions: ['ADMINISTRATOR'], 
            ignoreBots: false,
            verbose: true,
            ignoredUsers: []
        });
        
        module.exports = antiSpam;
    }
}