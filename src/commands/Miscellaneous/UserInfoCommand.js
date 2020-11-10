const Command = require('../../Util/Command');

module.exports = class UserInfoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'userinfo',
            aliases: ['ui', 'uinfo'],
            description: 'Saiba informações sobre alguma conta',
            category: 'Miscellaneous'
        })
    }
    run(message, args, t) {
        const { MessageEmbed } = require('discord.js')
  const moment = require('moment')
  moment.locale("pt-BR")
  
  let permissions = []

    const uuser = mentions.members.first() || await client.users.cache.get(args[0]) || member

    if (uuser.hasPermission('ADMINISTRATOR')) permissions.push('`Administrador`')
    if (uuser.hasPermission('VIEW_AUDIT_LOG')) permissions.push('`Ver o registro de auditoria`')
    if (uuser.hasPermission('MANAGE_GUILD')) permissions.push('`Gerenciar servidor`')
    if (uuser.hasPermission('MANAGE_ROLES')) permissions.push('`Gerenciar cargos`')
    if (uuser.hasPermission('MANAGE_CHANNELS')) permissions.push('`Gerenciar canais`')
    if (uuser.hasPermission('KICK_MEMBERS')) permissions.push('`Expulsar membros`')
    if (uuser.hasPermission('BAN_MEMBERS')) permissions.push('`Banir membros`')
    if (uuser.hasPermission('CREATE_INSTANT_INVITE')) permissions.push('`Criar convite`')
    if (uuser.hasPermission('CHANGE_NICKNAME')) permissions.push('`Alterar apelido`')
    if (uuser.hasPermission('MANAGE_NICKNAMES')) permissions.push('`Gerenciar apelidos`')
    if (uuser.hasPermission('MANAGE_EMOJIS')) permissions.push('`Gerenciar emojis`')
    if (uuser.hasPermission('MANAGE_WEBHOOKS')) permissions.push('`Gerenciar webhooks`')
    if (uuser.hasPermission('VIEW_CHANNEL')) permissions.push('`Ler canais de texto e ver canais de voz`')
    if (uuser.hasPermission('SEND_MESSAGES')) permissions.push('`Enviar mensagens`')
    if (uuser.hasPermission('SEND_TTS_MESSAGES')) permissions.push('`Enviar mensagens em TTS`')
    if (uuser.hasPermission('MANAGE_MESSAGES')) permissions.push('`Gerenciar mensagens`')
    if (uuser.hasPermission('EMBED_LINKS')) permissions.push('`Inserir links`')
    if (uuser.hasPermission('ATTACH_FILES')) permissions.push('`Anexar arquivos`')
    if (uuser.hasPermission('READ_MESSAGE_HISTORY')) permissions.push('`Ver histórico de mensagens`')
    if (uuser.hasPermission('MENTION_EVERYONE')) permissions.push('`Mencionar @everyone, @here e todos os cargos`')
    if (uuser.hasPermission('USE_EXTERNAL_EMOJIS')) permissions.push('`Usar emojis externos`')
    if (uuser.hasPermission('ADD_REACTIONS')) permissions.push('`Adicionar reações`')
    if (uuser.hasPermission('CONNECT')) permissions.push('`Conectar`')
    if (uuser.hasPermission('SPEAK')) permissions.push('`Falar`')
    if (uuser.hasPermission('STREAM')) permissions.push('`Vídeo`')
    if (uuser.hasPermission('MUTE_MEMBERS')) permissions.push('`Silenciar membros`')
    if (uuser.hasPermission('DEAFEN_MEMBERS')) permissions.push('`Ensurdecer membros`')
    if (uuser.hasPermission('MOVE_MEMBERS')) permissions.push('`Mover membros`')
    if (uuser.hasPermission('USE_VAD')) permissions.push('`Usar detecção de voz`')
    if (uuser.hasPermission('PRIORITY_SPEAKER')) permissions.push('`Voz Prioritária`')
    if (permissions.length === 0) permissions.push('Sem permissões')

    const status = {
        online: '',
        idle: '',
        offline: '',
        dnd: ''
    }

    const emojis = { 
      'DISCORD_EMPLOYEE': '<:Funcionario:754074239849725984>', 
      'DISCORD_PARTNER': '<:partner:723568237241040998>', 
      'HYPESQUAD_EVENTS': '<:hypesquad_events:723567460581638194>',
      'BUGHUNTER_LEVEL_1': '<:bughunter1:754075531967856731>',
      'HOUSE_BRAVERY': '<:housebravery:756940696044175492>',
      'HOUSE_BRILLIANCE': '<:housebrillance:756940656659791953>',
      'HOUSE_BALANCE': '<:houseballance:756940619598921839>',
      'EARLY_SUPPORTER': '<:earlysupporter:756940725286862948>',
      'BUGHUNTER_LEVEL_2': '<:bughunter2:754075510128115713>',
      'VERIFIED_DEVELOPER': '<:badge_dev:756940761370722334>'
    }
 

    const badges = Object.entries(uuser.user.flags.serialize()).filter(f => f[1]).map(f => f[0]).map(f => emojis[f]).join(' ')
    const guildMember = args[0] ? mentions.users.first() || await this.client.users.fetch(args[0]).catch(_ => member) : member
    const user = guildMember.user ? guildMember.user : guildMember

    if (!user && !guildMember) return channel.send('Membro não encontrado')

    const customStatus = guildMember.presence.activities.filter(a => a.type === 'CUSTOM_STATUS')
    const games = guildMember.presence.activities.filter(a => a.type === 'PLAYING').map(a => a.name)
    let uinfo = mentions.users.first()
    if (!uinfo) {
    uinfo = author
    } else {
      uinfo = mentions.users.first() || client.users.cache.get(args[0]) || author
    }

    const embed = new MessageEmbed()
      .setTitle(`${badges} ${uinfo.username}`)
      .setThumbnail(user.displayAvatarURL({ dynamic: true, size: 2048 }))
      .setColor("PURPLE")
      .addFields([
        { // check
          name: '<:pessoa1:733733325558120498> Tag',
          value: `\`${user.tag}\``,
          inline: true
        },
        { // check
          name: '<:id3:733733686335373432> ID',
          value: `\`${user.id}\``,
          inline: true
        },
        {
          name: 'DISCRIMINADOR',
          value: `\`${user.discriminator}\``,
          inline: true
        },
        { // check
          name: '<:lapis:733732701395484702> Apelido',
          value: `${guildMember.nickname ? guildMember.nickname : '``Sem apelido``'}`,
          inline: true
        },
        { // check
          name: '<:pergaminho2:733734251933073449> Status personalizado',
          value: `\`${customStatus.length === 0 ? 'Não definido' : customStatus[0].state === null ? 'Não definido' : customStatus[0].state }\``, 
          inline: false
        },
        { // check
          name: '🎮 Jogando',
          value: `\`${games.length === 0 ? 'Não definido' : games.join('\n')}\``,
          inline: false
        },
        { // check
          name: '<:calendario:733733350367428659> Criou a conta em',
          value: moment(user.createdAt).format('LLL'),
          inline: true
        },
        { // check
          name: '<:lista2:733734766670774312> Entrou no servidor em:',
          value: moment(member.joinedTimestamp).format('LLL'),
          inline: true
        }
      ])
      .setFooter(`Solicitado por ${author.username}`, author.displayAvatarURL({ dynamic: true, size: 2048 }))

    channel.send(embed).then((c, msg) => {
      c.react('754088392811216947').then(() => {})
      let Embed2 = (reaction, user, ) => reaction.emoji.id === '754088392811216947' && user.id === author.id
      let Uinfos = c.createReactionCollector(Embed2)
     const roles = uuser.roles.cache.filter(r => r.id !== guild.id).map(r => r).join(", ") || 'Sem Cargos'

      Uinfos.on('collect', r2 => {
        let Uinfos = new MessageEmbed()
          .setTitle(`${badges} ${uinfo.username}`)
          .setThumbnail(user.displayAvatarURL({ dynamic: true, size: 2048 }))
          .setColor("PURPLE")
          .addFields([
            {
              name: `<:fita1:733740352980123748> Cargos (${message.member.roles.cache.filter(r => r.id !== guild.id).map(roles => roles.name).length})`,
              value: `${roles}`
            },
            {
              name: '<:documento:733739975924908128> Permissões',
              value: `${permissions.join(', ')}`
            }
          ])
        c.reactions.removeAll()
        c.edit(Uinfos)
        c.react('754088234295885895').then(() => {})
        let voltar = (reaction, user) => reaction.emoji.id === '754088234295885895' && user.id === author.id
        let voltar2 = c.createReactionCollector(voltar)

        voltar2.on('collect', r3 => {
          c.reactions.removeAll()
          c.edit(embed)
          c.react('754088392811216947').then(() => {})
         })
      })
    })
    }
}