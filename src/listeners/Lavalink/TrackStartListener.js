const { Listener } = require('../../structure')
const { Utils } = require('erela.js')

module.exports = class TrackStartListener extends Listener {
  constructor() {
    super({
      name: 'trackStart'
    })
  }
  run({ textChannel }, { title, duration, author }) {
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
      .setColor('#66dbff')
      .setDescription(`
      <a:discoSweet:759199892169687061> → Música:
${title}

<a:discoSweet:759199892169687061> → Duração:
${Utils.formatTime(duration, true)}

<a:discoSweet:759199892169687061> → Artista/Canal:
${author}
`)
    textChannel.send(embed)
  }
}
