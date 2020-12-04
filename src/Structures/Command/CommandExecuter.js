module.exports = class CommandExecuter {
    constructor(client, msg) {
        this.client = client;
        this.msg = msg;
        
        try {        
            const { Utils, BlacklistChecker, CommandContext, CommandOptions, ZoeEmbedBuilder } = require('../../')
            
            const ZoeUtils = new Utils(this.client, msg)
            const prefix = ZoeUtils.getGuildPrefix()
            
            if(msg.content === `<@!${client.user.id}>` || msg.content === `<@${client.user.id}>`) 
            return msg.channel.createMessage("My name is Zoe and my prefix for " + msg.channel.guild.name + " is `" + prefix + "`, if you want help with me, use `" + prefix + "help`, I speak English and Portuguese. If you is Administrator, you can change Language in my Dashboard")
            
            if(!this.msg.content.startsWith(prefix)) return;
            if(this.msg.content === prefix) return;
            const BlChecher = new BlacklistChecker(this.client, msg)
            
            const userCheck = BlChecher.userCheck()
            
            if(userCheck === true) {
                const embed = new ZoeEmbedBuilder(msg.author)
                embed.setDescription(`\nOh no, you was banned ...\nIs it so hard to follow my rules?\n\n${userCheck}\n\nYou think it was unfair and think you are right about the situation (a little difficult lol), go to the Support Server and clarify the situation as it really happened. Now, if you have been banned from my Server, Each with their own problems`)
                return client.users.get(msg.author.id).getDMChannel().send({ embed: embed }).catch(err => {})
            }
            
            msg.reply() = ZoeUtils.reply()
            const translate = ZoeUtils.createT()
            
            let args = this.msg.content.slice(prefix.length).trim().split(" ")
            
            let command = args.shift().toLowerCase()
            let cmd = this.client.commands.get(command) || this.client.commands.get(this.client.aliases.get(command))
            
            const cooldown = this.client.cooldown
            if (!cmd) return this.msg.channel.createMessage(`${this.client.clientEmojis.getEmoji('think')} | Não existe nenhum comando chamado \`${command}\``).then(msg => setTimeout(() => { msg.delete() }, 8500))
            
            if(cooldown.has(this.msg.author.id)) {
                return this.msg.channel.createMessage(translate('')).then(msg => setTimeout(() => { msg.delete() }, 7500))
            }
            
            if(!cooldown.has(this.msg.author.id)) {
                new CommandOptions(this.client, cmd, msg, translate)
                cmd.execute(client, msg, args, translate) 
                
                cooldown.set(this.msg.author.id) 
                
                setTimeout(() => {
                    cooldown.delete(this.msg.author.id)
                }, cmd.commandSettings.cooldown * 1000)
            }
        } catch (err) {
            if(err) {
                console.error(err)
                msg.channel.createMessage("Oh no, Have any error...\n\n Error: " + err)        
            }
        }
    }
}