const { GorilinkPlayer } = require('gorilink')

module.exports = class AsunaPlayer extends GorilinkPlayer {
  constructor (node, options, manager) {
    super(node, options, manager)

    this.node = node
    this.manager = manager

    this.voiceChannel = options.voiceChannel

  addToQueue (track, user) {
    track.info.requester = user
    track.info.thumbnail = `https://img.youtube.com/vi/${track.info.identifier}/hqdefault.jpg`

    return this.queue.add(track)
  }
  end () {
    setTimeout(() => {
      if (this.playing) return
      this.destroy()
      this.textChannel.send(':sleeping: | Saindo do canal devido a Inatividade...')
    }, 120000)
  }
}
