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
		if(!db) {
			this.client.database.GuildSchema.create({ '_id': this.msg.channel.guild.id }).catch(err => {})
		}
		
		if(db) prefix = db.prefix
		
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
	
	reply(content) {
		let body = {
			content: {
				embed: content
			},
			message_reference: {
				message_id: this.msg.id,
				channel_id: this.msg.channel.id,
				guild_id: this.msg.channel.guild.id
			}
		}
		
		if(typeof content === 'string') {
			body = {
				content: `${content}`,
				message_reference: {
					message_id: this.msg.id,
					channel_id: this.msg.channel.id,
					guild_id: this.msg.channel.guild.id
				}
			}
		}

		require('node-fetch')(`https://discord.com/api/v8/channels/${this.msg.channel.id}/messages`, {
			method: 'post',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bot ${this.client.token}`
			}
		})
	}
}