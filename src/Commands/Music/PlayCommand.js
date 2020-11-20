const { Command } = require('../../')

module.exports = class PlayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'play',
            aliases: ['p'],
            description: 'Toca a música de sua escolha no canal de voz',
            usage: '<prefix>play <args>',
            category: 'Music',
            cooldown: 8
        })
    }

    run(client, msg, args, t) {
    const memberChannel = msg.member.voiceState.channelID

    if(!memberChannel) return msg.channel.createMessage('precisa estar num canal de voz')

    
    const player = await client.music.join({
      guild: msg.guildID,
      voiceChannel: memberChannel,
      textChannel: msg.channel
    })

    const { tracks, loadType } = await client.music.fetchTracks(args.join(' '))

    switch (loadType) {
    
        case "SEARCH_RESULT":
        player.queue.add(tracks[0])

        msg.channel.createMessage('Adicionado na queue ' + tracks[0].title)

        if (!player.playing) return player.play()
        break;

        case "LOAD_FAILED":
            msg.channel.createMessage(t('Music:PlayCommand.LoadFailed', {  }))
        break;

        case "NO_MATCHES":
            msg.channel.createMessage(t('Music:PlayCommand.NoMatches'))
    }
    }
}