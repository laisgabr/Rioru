module.exports = class Utils {
	constructor(client, msg) {
	if(!client) throw new Error("You need pass client in Utils Class")	
	if(!msg) throw new Error("You need pass msg in Utils Class")
	
	this.client = client;
	this.msg = msg;
	}

   async getGuildPrefix() {
		let prefix = "z!"
        
		const db = await this.client.database.GuildSchema.findOne({ '_id': this.msg.channel.guild.id }).catch(err => {})
		if(!guild) {
			this.client.database.GuildSchema.create({ '_id': this.msg.channel.guild.id }).catch(err => {})
		}

		if(guild) prefix = db.prefix

		return prefix;
	}

	async getGuildLocale() {
	    const { SetServerLocale } = require('../../../')

		new SetServerLocale(this.client, this.msg.channel.guild)

		const db = await this.client.database.GuildSchema.findOne({ '_id': this.msg.channel.guild.id })
		if(!db) { 
		this.client.database.GuildSchema.create({ '_id': this.msg.channel.guild.id }).catch(err => {}) 
		}

		return db.locale;
	}

	createT() {
		const locale = this.getGuildLocale()

		const { i18 } = require('../../../')
		new i18(this.client, locale)

		const t = require('../../i18n/t')

		return t;
	}
}