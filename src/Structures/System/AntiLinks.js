module.exports = class AntiLink {
    constructor(client, msg) { 
        this.client.database.GuildSchema.findOne()
        const regex = /http(?:s:\/\/(?:watchanimeattheoffice\.com|dis(?:cord(?:app\.(?:net|com)|\.(?:media|com|co|gg))|\.gd))|:\/\/(?:watchanimeattheoffice\.com|dis(?:cord(?:app\.(?:net|com)|\.(?:media|com|co|gg))|\.gd)))\/invite\/[\d\w]/
        if(regex.exec(msg.content)) return msg.channel.createMessage()
    }
}