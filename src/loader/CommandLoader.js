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
      this.initCommands()
      this.log(this.failed ? `${this.success} carregou com sucesso e ${this.failed} falha.` : 'Todos os comandos foram carregados com sucesso', 'commands')
      return true
    } catch (e) {
      this.logError(e.stack, 'commands')
      return false
    }
  }

  initCommands (dir = 'src/commands') {
    this.log('Carregando comandos...', 'commands')
    return requireDirectory({ dir }, (error, Command) => {
      const command = new Command(this.client)

      this.client.commands.set(command.name, command)

      if (error) {
        this.logError(`|  ${command.name}: Erro: ` + error.message, +'error')
        return this.failed++
      }

      console.info(`|  [${command.category}] [${command.name}] Carregado.`)
      this.success++
    })
  }
}
