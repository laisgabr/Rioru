const Command = require('../../Util/Command')

module.exports = class QueueCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'queue',
            aliases: ['q'],
            description: 'Mostra a atual Lista de Reprodução no Servidor',
            category: 'Music'
        })
    }
    run(message, args, t) {
        const { MessageEmbed } = require('discord.js')
        const player = this.client.music.players.get(message.guild.id);
    if (!player) return message.reply("Não tem nenhum Player aqui");

    const queue = player.queue;
    const embed = new MessageEmbed().setAuthor(`Lista de Reprodução de ${message.guild.name}`);

    const multiple = 10;
    const page = args.length && Number(args[0]) ? Number(args[0]) : 1;

    const end = page * multiple;
    const start = end - multiple;

    const tracks = queue.slice(start, end);

    if (queue.current) embed.addField("Tocando Agora:", `[${queue.current.title}](${queue.current.uri})`);

    else embed.setDescription(tracks.map((track, i) => `${start + (++i)} - [${track.title}](${track.uri})`).join("\n"));

    const maxPages = Math.ceil(queue.length / multiple);

    embed.setFooter(`Página ${page > maxPages ? maxPages : page} de ${maxPages}`);

    return message.reply(embed);
    }
}