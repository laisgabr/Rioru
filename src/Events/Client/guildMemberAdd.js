module.exports = class GuildMemberAddEvent {
    constructor(client) {
        this.client = client
    }

   async run(member) {
        const db = await this.client.database.GuildSchema.findOne({ '_id': member.guild.id })

        if(!db) {
            await this.client.database.GuildSchema.create({ '_id': member.guild.id })
            return;
        }

        if(db.welcomeStats === false || db.welcomeChannelId === 'null') return; 

        const message = db.welcomeText

        const msg = await message.replace('{member.tag}', `${member.user.tag}`)
        .replace('{member.id}', `${member.user.id}`)
        .replace('{member.mention}', `<@${member.user.id}>`)
        .replace('{guild.name}', `${member.guild.name}`)
        .replace('{guild.id}', `${member.guild.id}`)
        .replace('{guild.count}', `${member.guild.memberCount}`)

        this.client.channels.cache.get(db.welcomeChannelId).send(msg)
    }
}