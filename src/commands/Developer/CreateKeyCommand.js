const Command = require('../../Util/Command')

module.exports = class CreateKeyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'createkey',
            aliases: [],
            category: 'Developer',
            onlyDevs: true
        })
    }
   async run (message, args, t) {
    let array = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4',
        '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd',
        'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
        'y', 'z', '!', '@', '#', '$', '%', '&'
    ]

    let key;

    for(let i = 0; i < 16; i++) key += array[Math.floor(Math.random() * array.length)]
    key.replace('undefined', '')
        
        this.client.database.KeySchema.create({ '_id': key })

        message.channel.send('Enviei a Key em seu privado..')

        message.author.send('Sua key foi gerada com sucesso, Sua Key: **' + key + '**').catch(() => message.channel.send('Libera a dm ai'))
    }
}