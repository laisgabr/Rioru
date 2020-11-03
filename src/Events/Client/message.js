const i18next = require('i18next')
const translationBackend = require('i18next-node-fs-backend')
const { readdirSync } = require('fs')

module.exports = class MessageEvent {
    constructor (client) {
        this.client = client
    }

    async run(message) {
        if(message.channel.type !== 'text') return;
        if(message.author.bot) return;

        const guild = await this.client.database.GuildSchema.findOne({ '_id': message.guild.id})
        
        let prefix = guild.prefix 

        if(!guild) {
            prefix = "z!"
            await this.client.database.GuildSchema.create({ '_id': message.guild.id })
        }
        
        if (!message.content.startsWith(prefix)) return;
        let args = message.content.slice(prefix.length).trim().split(" ")

        var t;
        const setFixedT = function(translate){
           t = translate
        };
        
        const language = guild.locale || "pt-BR"
        setFixedT(i18next.getFixedT(language))
        
        i18next.use(translationBackend).init({
            ns: ['commands', 'errors', 'permissions'],
            preload: await readdirSync('./src/Locales'),
            fallbackLng: 'pt-BR',
            backend: {
                loadPath: `./src/Locales/{{lng}}/{{ns}}.json`
            },
            interpolation: {
                escapeValue: false
            },
            returnEmptyString: false
        }, async () => {
            let command = args.shift().toLowerCase()
            let cmd = this.client.commands.get(command) || this.client.commands.get(this.client.aliases.get(command))
            if (!cmd) return message.channel.send('Não achei nenhum Comando com `' + command + '`').then(msg => msg.delete({ timeout: 10000 }))
            let userPermission = cmd.config.userPermission
            
            if (userPermission !== null) {
                if (!message.member.permissions.has(userPermission)) { 
                    let perm = userPermission.map(value => value).join(", ")
                    return message.reply(`Você não tem a permissão \`${perm}\` para continuar`)
                }
            
            }
    
            if (cmd.config.onlyDevs === true && !this.client.settings.owners.includes(message.author.id)) {
                return message.channel.send('Sem permissão')
            }

            const player = this.client.music.players.get(message.guild.id)

            if(cmd.config.voiceChannelOnly === true) {
                if(!message.member.voice.channel) return message.channel.send('Você precisa estar num canal de voz');
                if(message.member.voice.channel.id !== player.voiceChannel) return message.channel.send('Você precisa estar no mesmo canal que eu')
            }
            
            if(cmd.config.queueOnly === true && player.queue.size === 0) {
                return message.channel.send('Eu não tenho nada na Lista de Reprodução desse Servidor')    
            }

            if(cmd.config.nsfwChannelOnly === true && message.channel.nsfw === false) {
                return message.channel.send(':underage: | Permitido apenas em NSFW Channel',  { files: [{ attachment: './src/Assets/NSFW.gif', name: 'NotSafeForWork.gif' }] })
            }


            cmd.run(message, args, t)
        })
    }
}