module.exports = class GuildCreateEvent {
    constructor(client) {
        this.client = client
    }

   async run(guild) {
    const { MessageEmbed } = require('discord.js')

    const embed = new MessageEmbed()
    .setDescription(`
    Zoe now added in an Server
    
    Name:
    ${guild.name}(\`${guild.id}\`)

    Owner:
    ${guild.owner.user.tag}(\`${guild.owner.user.id}\`)

    Member Count:
    ${guild.memberCount}

    Now have ${this.guilds.cache.size} Servers and ${this.users.cache.size} users.
    `)
    .setColor('GREEN')
    .setThumbnail(guild.iconURL({ dynamic: true }))
    this.channels.cache.get("761378501130584074").send(embed)        

    const guildDb = await this.client.database.GuildSchema.findOne({ '_id': guild.id })

    if(!guildDb) {
        await this.client.database.GuildSchema.create({ '_id': guild.id })
    }

    if(guildDb) return;
    }
}