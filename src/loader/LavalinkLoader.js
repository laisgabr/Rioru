/* eslint-disable indent */
const { Loader } = require('../structure')
const { requireDirectory } = require('../util')

module.exports = class CommandLoader extends Loader {
  constructor (client) {
    super(client)
    this.success = 0
    this.failed = 0

    this.critical = true
  }

  load () {
    try {
        this.initLavalink()
        this.log(
          this.failed
            ? this.success +
                ' carregaram com sucesso e ' +
                this.failed +
                ' falharam'
            : 'Todos carregados com sucesso',
          'Lavalink'
        )
        return true
      } catch (err) {
        this.logError(err.message, 'lavalink')
      }
      return false
  }

  initLavalink (dir = 'src/listeners/Lavalink') {
    this.log('Carregando eventos', 'lavalink')
    return requireDirectory({ dir }, (error, Listener) => {
      if (error) {
        this.logError('    Erro: ' + error.message)
        return this.failed++
      }

      const listener = new Listener()

      listener.listen(this.client)
      console.info('|    [' + listener.name + '] carregado')
      this.success++
    })
}
}
