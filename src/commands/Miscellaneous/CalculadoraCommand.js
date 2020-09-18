/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable lines-between-class-members */
/* eslint-disable indent */
const { Command } = require('../../structure')

module.exports = class CaclCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'calc',
            aliases: ['calculadora'],
            category: 'Miscellaneous'
        })
    }
    run ({ channel, args }) {
        const { create, all } = require('mathjs')
        const { MessageEmbed } = require('discord.js')
        
        if (!args.length) return channel.send('**Use:** <prefix>calc <Expressão Matemática>')
        
        const math = create(all);
        const limitedEvaluate = math.evaluate;
        
        math.import({
            import: function () { throw new Error('A função import está desativada') },
            createUnit: function () { throw new Error('A função createUnit está desativada') },
            evaluate: function () { throw new Error('A função evaluate está desativada') },
            parse: function () { throw new Error('A função parse está desativada') },
            simplify: function () { throw new Error('A função simplify está desativada') },
            derivative: function () { throw new Error('A função derivative está desativada') },
            format: function () { throw new Error('A função format está desativada') }
        }, { override: true });
        
        const expr = args.join(' ').toLowerCase()
        
        let result;
        try {
            result = limitedEvaluate(expr);
        } catch (err) {
            return channel.send('❌ Expressão inválida!');
        }
        if (result === Infinity || result === -Infinity || result.toString() === 'NaN') result = 'Impossível determinar'; 
        if (typeof result === 'function') return channel.send('❌ Expressão inválida!'); 

        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Calculadora')
            .addField('Expressão Matématica', `\`\`\`${args.join(' ')}\`\`\``)
            .addField('Resultado', `\`\`\`${result}\`\`\``)
            
        channel.send(embed)
    }
}
