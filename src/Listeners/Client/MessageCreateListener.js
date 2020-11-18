const { i18, Listener } = require('../../')

module.exports = class MessageCreateListener extends Listener {
    constructor(client) {
        super(client, {
            name: 'messageCreate'
        })
    }
    
    async run(msg) {
        const guild = await this.client.database.GuildSchema.findOne({ '_id': msg.channel.guild.id }).catch(err => {})
        let prefix = '0';
        
        if(!guild || guild === null || guild === undefined || guild === false) {
            prefix = "z!"
            this.client.database.GuildSchema.create({ '_id': msg.channel.guild.id })
        }
        
        if(prefix === '0') {
            prefix = guild.prefix;
        }
        
        if(!msg.content.startsWith(prefix)) return;
        if(msg.content === prefix) return;
        let args = msg.content.slice(prefix.length).trim().split(" ")
        
        let command = args.shift().toLowerCase()
        let cmd = this.client.commands.get(command) || this.client.commands.get(this.client.aliases.get(command))
        
        const cooldown = this.client.cooldown
        if (!cmd) return this.client.createMessage(msg.channel.id, `${this.client.clientEmojis.getEmoji('think')} | Não existe nenhum comando com \`${command}\``).then(msg => setTimeout(() => { msg.delete() }, 8500))
        
        if(cooldown.has(msg.author.id)) {
            return this.client.createMessage(msg.channel.id, 'O tempo de Cooldown desse comando é de ' + cmd.commandSettings.cooldown + ' segundos').then(msg => setTimeout(() => { msg.delete() }, 7500))
        }

        new i18(this, guild.locale)
        
        const t = require('../../Structures/i18n/t')
        
        const client = this.client
        
        if(!cooldown.has(msg.author.id)) {
            cmd.run(client, msg, args, t)
            cooldown.set(msg.author.id)   
            
            setTimeout(() => {
                cooldown.delete(msg.author.id)
            }, cmd.commandSettings.cooldown * 1000)
        }
    }
}