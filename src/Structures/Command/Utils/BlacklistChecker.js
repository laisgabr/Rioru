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
		if(db.blacklist.blacklisted === true) {
			return "Reason:\n" + db.blacklist.reason + "\n\n Moderator:\n" + db.blacklist.staff + "\n\nTime:\n" + db.blacklist.time
		}
		
		return db.blacklist.blacklisted
	}
}