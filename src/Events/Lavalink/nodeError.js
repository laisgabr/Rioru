module.exports = class NodeErrorEvent {
    constructor (client) {
        this.client = client
    }

    async run(error) {
        console.log(require('chalk').red.bold('Have any Error  ' + error))
    }
}