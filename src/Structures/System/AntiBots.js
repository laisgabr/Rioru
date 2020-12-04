module.exports = class AntiBots {
    constructor(client, msg) {
        this.client = client;
        this.msg = msg;
    }
    
    removeBotGuild(user) {
        this.msg.channel.guild.members.get(user.id).kick("AntiBots On")
    }
}