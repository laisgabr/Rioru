const { GorilinkPlayer } = require('gorilink')

module.exports = class AsunaPlayer extends GorilinkPlayer {
  constructor (node, options, manager) {
    super(node, options, manager)

    this.node = node
    this.manager = manager

    this.voiceChannel = options.voiceChannel

    this.filters = {
      nightcore: false,
      bassboost: false
    }
  }

  addToQueue (track, user) {
    track.info.requester = user
    track.info.thumbnail = `https://img.youtube.com/vi/${track.info.identifier}/hqdefault.jpg`

    return this.queue.add(track)
  }

  bassboost (mode) {
    if (typeof mode !== 'undefined') this.filters.bassboost = mode
    else this.filters.bassboost = !this.filters.bassboost

    this.filters.bassboost ? this.setGain(1) : this.setGain(0)
  }

  nightcore (mode) {
    if (typeof mode !== 'undefined') this.filters.nightcore = mode
    else this.filters.nightcore = !this.filters.nightcore

    this.filters.nightcore
      ? this.setTimescale({ speed: 1.1, pitch: 1.3, rate: 1.3 })
      : this.setTimescale({ speed: 1.0, pitch: 1.0, rate: 1.0 })
  }

  setGain (number) {
    return this.setEQ(
      Array(3)
        .fill('')
        .map((value, index) => ({ band: index, gain: number }))
    )
  }

  setTimescale ({ speed, pitch, rate }) {
    return this.node.send({
      op: 'filters',
      guildId: this.guild || this.guild.id,
      timescale: { speed, pitch, rate }
    })
  }

  end () {
    setTimeout(() => {
      if (this.playing) return
      this.destroy()
      this.textChannel.send(':sleeping: | Saindo do canal devido a Inatividade...')
    }, 120000)
  }
}
