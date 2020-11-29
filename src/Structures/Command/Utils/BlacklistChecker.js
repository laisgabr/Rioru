module.exports = class BlacklistChecker {
	constructor(client, msg) {
		this.client = client;
		this.msg = msg;
	}

	async userCheck() {
	   const db = await this.client.database.UserSchema.findOne({ '_id': this.msg.author.id })
	   if(!db) { 
	     this.client.database.UserSchema.create({ '_id': this.msg.author.id })
	     return false;
	   }

	   return db.blacklist.blacklisted
	}

	async guildCheck() {
	   const db = await this.client.database.GuildSchema.findOne({ '_id': this.msg.channel.guild.id })
	   if(!db) { 
	     this.client.database.GuildSchema.create({ '_id': this.msg.channel.guild.id })
	     return false;
	   }

	   return db.blacklist.blacklisted
	}
}