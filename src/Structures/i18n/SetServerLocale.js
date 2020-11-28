module.exports = class SetServerLocale {
    constructor(client, guild) {
        this.client = client;
        
        setTimeout(() => {
            const region = {
                "brazil": 'Brasil',
                "eu-central": "Central Europe",
                "singapore": "Singapore",
                "us-central": "U.S.A",
                "sydney": "Sydney",
                "us-east": "U.S.A",
                "us-south": "U.S.A",
                "us-west": "U.S.A",
                "eu-west": "Western Europe",
                "vip-us-east": "VIP U.S. East",
                "london": "London",
                "amsterdam": "Amsterdam",
                "hongkong": "Hong Kong",
                "russia": "Russia",
                "southafrica": "South Africa"
            }
            
            if(region[guild.region] === 'Brasil') {
                this.client.database.GuildSchema.findOne({ '_id': guild.id }).then(async function(db) {
                    if(!db) this.client.database.GuildSchema.create({ '_id': guild.id })
                    if(db.locale === 'pt-BR') return;
                    
                    db.locale = 'pt-BR'
                    db.save()
                })
            }
            
            if(!region[guild.region] === 'Brasil') {            
                this.client.database.GuildSchema.findOne({ '_id': guild.id }).then(async function(db) {
                    if(!db) this.client.database.GuildSchema.create({ '_id': guild.id })
                    
                    if(db.locale === 'en-US') return;
                    
                    db.locale = 'en-US';
                    db.save()
                })
            }
        })
    }
}