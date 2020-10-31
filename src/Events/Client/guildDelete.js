module.exports = class GuildDeleteEvent {
    constructor(client) {
        this.client = client
    }

    async run(guild) {
        const guildDb = await this.client.database.GuildSchema.findOne({ '_id': guild.id })
        
        if(guildDb) {
            await this.client.database.GuildSchema.delete({ '_id': guild.id })
        } else {
            return;
        }
    }
}