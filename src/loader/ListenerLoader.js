const { Loader } = require('../structure')
const { requireDirectory } = require('../util')

module.exports = class ListenerLoader extends Loader {
  constructor (client) {
    super(client)
    this.success = 0
    this.failed = 0

    this.critical = true
  }

  load () {
    try {
      this.initListeners()
      this.log(this.failed ? `${this.success} carregou com sucesso e ${this.failed} falhou.` : 'Todos os eventos carregados com sucesso', 'listeners')
      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }

  initListeners (dir = 'src/listeners/Discord') {
    this.log('Carregando Listeners/Eventos', 'listeners')
    return requireDirectory({ dir }, (error, Listener) => {
      if (error) {
        console.error('Erro: ' + error.message, 'erro')
        return this.failed++
      }

      const listener = new Listener()
      listener.listen(this.client)
      console.info(`|  [${listener.name}] Carregado.`)
      this.success++
    })
  }
}
