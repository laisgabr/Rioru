/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
const { Command } = require('../../structure')

module.exports = class PlayCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'play',
      aliases: ['tocar', 'p'],
      usage: '<prefix>play <args>',
      description: 'Ouça músicas em algum canal de voz',
      category: 'Music',
      voiceChannelOnly: true
    })
  }

  async run ({ channel, args, member, guild, author, lavalink }) {
        if (!args.join(' ')) {
            return channel.send('Você não forneceu um Nome de uma Música ou uma url')
          }
    
        const player = await lavalink.join(
            {
              guild,
              voiceChannel: member.voice.channel,
              textChannel: channel
            },
            { selfDeaf: true }
          )
          if (author.id === '468817505318862882') {
            if (args[0] === 'myQueue') {
            const trackDono = await lavalink.fetchTracks('No one like you')
            player.queue.add(trackDono, author)
            const trackB = await lavalink.fetchTracks('Tease me please me')
            player.queue.add(trackB, author)
            const track0 = await lavalink.fetchTracks('Sowing of seeds of love')
            if (!player.playing) player.play()
            channel.send(`Tocando suas músicas preferidas ${author}....`)
            return
            }
          }
      const { tracks, loadType } = await lavalink.fetchTracks(args.join(' '))
   
    switch (loadType) {
      case 'NO_MATCHES': {
        channel.send(`:x: Não foi encontrado nenhuma música com o Nome: \`${args.join(' ')}\` `)
        break
      }

      case 'PLAYLIST_LOADED': {
        for (const track of tracks.slice(0, 250)) {
          if (player.queue.length >= 250) {
            return channel.send(':x: A Lista de Reprodução está cheia!')
          }

          player.queue.add(track[0], author)
        }

        // Tracks Added: tracks.slice(0, 250).length | | Playlist name: playlistInfo.name | | tracksDiscarded: tracks.length - 250,

        channel.send('Playlist carregada :D')
        if (!player.playing) return player.play()
        break
      }

      case 'SEARCH_RESULT':
      case 'TRACK_LOADED': {
        if (player.queue.length >= 250) {
          return channel.send('pqp')
        }

        player.queue.add(tracks[0], author)

        channel.send(`A música \`${tracks[0].info.title}\` foi adicionada a Lista de Reprodução por <@${author.id}>`)

        if (player.queue.length === 1) {
          if (!player.playing) player.play()
        }

        if (!player.playing) player.play()

        break
      }
    }
  }
}
