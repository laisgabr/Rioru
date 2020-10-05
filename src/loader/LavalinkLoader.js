const { Loader, requireDirectory } = require('../structure')

module.exports = class ListenerLoader extends Loader {
  constructor (client) {
    super(client)
    this.success = 0
    this.failed = 0

    this.critical = true
  }

  load () {
    try {
      this.initLavalink()
      this.log(this.failed ? `${this.success} carregou com sucesso e ${this.failed} falhou.` : 'Todos os eventos carregados com sucesso', 'LAVALINK')
      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }

  initLavalink (dir = 'src/listeners/Lavalink') {
    this.log('Carregando Listeners/Eventos do Lavalink', 'Lavalink')
    return requireDirectory({ dir }, (error, Listener) => {
      if (error) {
        console.error('Erro: ' + error.message)
        return this.failed++
      }

      const listener = new Listener(this.client)
      listener.listen(this.client)
      console.info(`|  [${listener.name}] Carregado.`)
      this.success++
    })
  }
}
