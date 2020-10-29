module.exports = class TrackStartEvent {
    constructor(client) {
        this.client = client
    }

    run(player, { title, identifier, uri, author }) {
    const { MessageEmbed } = require('discord.js')

    const urlThumb = `http://i.ytimg.com/vi/${identifier}/hqdefault.jpg`

    const embed = new MessageEmbed()
      .setColor('#66dbff')
      .setThumbnail(urlThumb)
      .setDescription(`
      <a:discoSweet:759199892169687061> → Música:
[${title}](${uri})

<a:discoSweet:759199892169687061> → Artista/Canal:
${author}
`)

    this.client.channels.cache.get(player.textChannel).send(embed)
    }
}