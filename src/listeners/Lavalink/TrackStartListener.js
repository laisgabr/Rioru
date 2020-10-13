const { Listener } = require('../../structure')
const { Utils } = require('erela.js')

module.exports = class TrackStartListener extends Listener {
  constructor() {
    super({
      name: 'trackStart'
    })
  }
 async run({ textChannel }, { title, duration, author, uri, identifier }) {
    const { MessageEmbed } = require('discord.js')

    const urlThumb = `http://i.ytimg.com/vi/${identifier}/hqdefault.jpg`

    const embed = new MessageEmbed()
      .setColor('#66dbff')
      .setThumbnail(urlThumb)
      .setDescription(`
      <a:discoSweet:759199892169687061> → Música:
[${title}](${uri})

<a:discoSweet:759199892169687061> → Duração:
${Utils.formatTime(duration, true)}

<a:discoSweet:759199892169687061> → Artista/Canal:
${author}
`)
  const msg = await textChannel.send(embed)

  setTimeout(function() {
    msg.delete({ timeout: 3000 })
  }, parseInt(duration))
  }
}
