module.exports = class CommandExecuter {
    constructor(client, msg) {
        this.client = client;
        this.msg = msg;

        const { Utils, BlacklistChecker, ZoeXP, CommandContext, CommandOptions } = require('../../')
        
        const ZoeUtils = new Utils()
        
        const prefix = ZoeUtils.getGuildPrefix()
        const translate = ZoeUtils.createT()
        
        if(!this.msg.content.startsWith(prefix)) return;
        if(this.msg.content === prefix) return;
        let args = this.msg.content.slice(prefix.length).trim().split(" ")
        
        let command = args.shift().toLowerCase()
        let cmd = this.client.commands.get(command) || this.client.commands.get(this.client.aliases.get(command))
        
        const cooldown = this.client.cooldown
        if (!cmd) return this.msg.channel.createMessage(`${this.client.clientEmojis.getEmoji('think')} | Não existe nenhum comando chamado \`${command}\``).then(msg => setTimeout(() => { msg.delete() }, 8500))
        
        if(cooldown.has(this.msg.author.id)) {
            return this.msg.channel.createMessage('O tempo de Cooldown desse comando é de ' + cmd.commandSettings.cooldown + ' segundos').then(msg => setTimeout(() => { msg.delete() }, 7500))
        }
        
        const client = this.client
        
        if(!cooldown.has(this.msg.author.id)) {
            cmd.execute(client, msg, zoe, args, translate) 
            
            cooldown.set(this.msg.author.id) 
              
            setTimeout(() => {
                cooldown.delete(this.msg.author.id)
            }, cmd.commandSettings.cooldown * 1000)
        }
    }
}