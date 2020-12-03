module.exports = class CommandOptions {
    constructor(client, cmd, msg, translate) {
        this.client = client;
        this.cmd = cmd.commandSettings;
        this.msg = msg;
        this.translate = translate;
    }
    
    contextLoad() {
        if(this.cmd.onlyDevs && !this.client.settings.owners.includes(this.msg.author.id)) {
            return this.msg.channel.createMessage(this.translate())
        }
        
        if(this.cmd.userPermissionNeeded !== null && !this.msg.member.permissions.has(this.cmd.userPermissionNeeded)) {
            const permission = this.cmd.userPermissionNeeded.map(value => value)
            if(this.client.database.GuildSchema.findOne({ '_id': this.msg.channel.guild.id }).locale === 'pt-BR') {
                const permissions = {
                    createInstantInvite:  "Criar Convites Instantaneos",
                    kickMembers: "Expulsar Membros",
                    banMembers: "Banir Memberos",
                    administrator: "Administrador",
                    manageChannels: "Gerenciar Canais",
                    manageGuild: "Gerenciar Servidor",
                    addReactions: "Adicionar Reações",
                    viewAuditLogs: "Ver o Registro de Auditoria",
                    voicePrioritySpeak: "Voz prioritaria",
                    stream: "",
                    readMessages: "Ler Mensagens",
                    sendMessages: "Enviar Mensagens",
                    sendTTSMessages: "Enviar Mensagens TTS",
                    manageMessages: "Gerenciar Mensagens",
                    embedLinks: "",
                    attachFiles: "",
                    readMessageHistory: "",
                    mentionEveryone: "",
                    externalEmojis: "",
                    viewGuildInsights: "",
                    voiceConnect: "",
                    voiceSpeak: ""
                }
                
                if(permission.length === 1) {
                    
                }
                
                return this.msg.channel.createMessage()
            }
        }
    }
}