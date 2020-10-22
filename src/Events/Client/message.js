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

        const user = await this.client.database.XPSchema.findOne({ '_id': message.author.id, 'guild': message.guild.id })
        if(!user) {
            await this.client.database.XPSchema.create({ '_id': message.author.id, 'guild': message.guild.id })
        }

        const guild = await this.client.database.GuildSchema.findOne({ '_id': message.guild.id})
        if(!guild) {
            await this.client.database.GuildSchema.create({ '_id': message.guild.id })
        }
        const prefix = /*guild.prefix ||*/ "z!"
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
            preload: await readdirSync('./src/locales'),
            fallbackLng: 'pt-BR',
            backend: {
                loadPath: `./src/locales/{{lng}}/{{ns}}.json`
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
                    return message.reply(`você não pode executar este comando, pois não tem permissão para \`${perm}\``)
                }
            
            }
    
            if (cmd.config.onlyDevs === true) {
               if(!this.client.settings.owners.includes(message.author.id)) {
                   return message.channel.send('Sem permissão')
               }
            }

            const player = this.client.music.players.get(message.guild.id)

            if(cmd.config.voiceChannelOnly === true) {
                if(!message.member.voice.channel) {
                    return message.channel.send('q')
                }
            }

            if(cmd.config.queueOnly === true) {
                if(player.queue.length === 0) {
                    return;
                }
            }
            cmd.run(message, args, t)
        })
    }
}    