module.exports = class AntiBots {
    constructor(client, guild, user) {
        this.client = client;
        this.guild = guild;
        this.user = user;
    }
    
    removeBotGuild() {
        this.client.guilds.get(this.guild.id).members.get(this.user.id).kick("AntiBots")
    }
    
    findBotsAndTryKick() {
        try {
            this.guild.members.filter(c => c.bot).forEach(f => f.kick("AntiBots"))
        } catch (e) {

        }
    }
}