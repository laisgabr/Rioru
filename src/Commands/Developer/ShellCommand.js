const { Command, ZoeEmbedBuilder } = require('../../')

module.exports = class ShellCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'shell',
            aliases: ['sh', '.sh'],
            category: 'Developer',
            cooldown: 6,
            onlyDevs: true
        })
    }
    
    async execute(client, msg, args, translate) {
        if(!args.join(' ')) return msg.channel.createMessage("Você precisa prover um argumento")
        
        const { promisify } = require('util');
        const exec = promisify(require('child_process').exec);
        
        const { stdout, stderr, error } = await exec(args.join(' '));
        if(error) { 
            const embed = new ZoeEmbedBuilder(msg.author)
            embed.setDescription(`\n${this.client.clientEmojis.getEmoji('error')} Ocorreu um erro ao executar isso!\nErro:\n${error}`)            
            return msg.reply(embed) 
        }

        if(stderr) {
        const embederror = new ZoeEmbedBuilder(msg.author)
        embederror.setDescription(`\n${this.client.clientEmojis.getEmoji('error')} Ocorreu um erro ao executar isso!\n\nErro:\n${stderr}`)
        return msg.reply(...args ,...args)
        }

        const embedSucess = new ZoeEmbedBuilder(msg.author)
        embedSucess.setDescription(`\n\n\nSaida:${stdout}\n\n\n`)
        
        return msg.reply(embedSucess)
    }
}