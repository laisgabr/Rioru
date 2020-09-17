/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
const { Command } = require('../../structure')
/*
const { Paginator } = require('../../structure')

const EMOJIS = ['⬅️', '⛔', '➡️']

const getIndexSong = ({ actual, size }) =>
  actual === 1 ? (actual - 1) * size + 1 : (actual - 1) * size
const mapSongs = (paginator, song, index) => {
  return `**${getIndexSong(paginator.pages) + index}). **\`${
    song.info.title
  }\` - **Requisitado por: \`${song.info.requester.username}\`**`
}
*/

module.exports = class QueueCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'queue',
            aliases: ['q'],
            voiceChannelOnly: true
        })
    }
   // eslint-disable-next-line lines-between-class-members
   async run ({ channel, guild, author }) {
    /*    
    const { queue } = guild.music

        const embeds = {
          default: this.embed({ author }),
          error: this.embed({ author, color: 'red' })
        }
    
        const paginator = new Paginator({ elements: queue, size: 10 })
    
        const embed = embeds.default
          .setAuthor('Fila de músicas.', this.client.user.displayAvatarURL())
          .setDescription(`**Tocando agora:** \`${queue[0].info.title}\``)
          .setFooter(
            'Página ' +
              paginator.pages.actual +
              ' de ' +
              paginator.pages.total +
              ' | ' +
              embeds.default.footer.text
          )
    
        if (queue.length > 1) {
          embed.setDescription(`${embed.description}
                    **Próximas músicas: [${queue.length - 1}]**
                    ${paginator
                      .get(true)
                      .map(mapSongs.bind(null, paginator))
                      .join('\n')}
                  `)
        }
    // eslint-disable-next-line no-trailing-spaces
    
        const msg = await channel.send(embed)
    
        if (queue.length <= 10) return
    
        for (const emoji of EMOJIS) await msg.react(emoji)
    
        const filter = (_, user) => user.id === author.id
    
        const collector = msg.createReactionCollector(filter, { time: 120000 })
    
        collector.on('collect', async r => {
          switch (r.emoji.name) {
            case EMOJIS[0]: {
              paginator.prevPage()
    
              const isFirstPage = paginator.pages.actual === 1
              const songs = paginator.get(isFirstPage)
    
              embed.setDescription(`**Tocando agora:** \`${queue[0].info.title}\`
                        **Próximas músicas: [${queue.length - 1}]**
                        ${songs.map(mapSongs.bind(null, paginator)).join('\n')}`)
    
              embed.setFooter(
                'Página ' + paginator.pages.actual + ' de ' + paginator.pages.total
              )
    
              r.users.remove(author.id).catch(console.error)
              msg.edit(embed)
              break
            }
            case EMOJIS[1]:
              collector.stop()
              break
    
            case EMOJIS[2]: {
              const songs = paginator.nextPage().get()
              embed.setDescription(`**Tocando agora:** \`${queue[0].info.title}\`
                        **Próximas músicas: [${queue.length - 1}]**
                        ${songs.map(mapSongs.bind(null, paginator)).join('\n')}`)
              embed.setFooter(
                'Página ' + paginator.pages.actual + ' de ' + paginator.pages.total
              )
    
              r.users.remove(author.id).catch(console.error)
              msg.edit(embed)
              break
            }
          }
        })
    
        collector.on('end', () => msg.delete())
        */
    }
}
