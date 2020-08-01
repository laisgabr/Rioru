const { MessageEmbed } = require("discord.js");
const config = require("../../config.json");

exports.report = async (bot, message, params, args) => {
    if (params.length <= 0) {
        return message.reply('digite uma mensagem para enviar!'); 
    } 

    const reactions = ['✅', '❌', '🚫', '🗑️'];

    const reportChannel = bot.guilds.cache.get(config.admServer.id).channels.cache.get(config.admServer.reportsChannel);
    const reportMessage = params.join(' ');

    const embed = new MessageEmbed()
        .setColor("RED")
        .setTitle(`Bug report`)
        .addFields(
            { name: 'Servidor', value: `${message.guild.name} [${message.guild.id}]`, inline: false},
            { name: 'Canal', value: `${message.channel.name} [${message.channel.id}]`, inline: false},
            { name: 'Usuário', value: `${message.author.username} [${message.author.id}]`, inline: false},
            { name: 'Mensagem', value: reportMessage}
            
        )
        .setTimestamp()
        .setFooter(`Solicitado por ${message.member.user.username}`, message.author.displayAvatarURL({ dynamic: true, size:2048 }));

    reportChannel.send({embed: embed}).then(async embedMessage => {
        reactions.map(async reaction => {
            await embedMessage.react(reaction);
        })

        const filter = (reaction, user) => {
            return reactions.includes(reaction.emoji.name) && config.admins.includes(user.id);
        };
        const collector = embedMessage.createReactionCollector(filter, { max: 4, time: 24 * 60 * 60 * 1000 }); // 24 horas

        collector.on('collect', (emoji) => {
            switch (emoji._emoji.name) {
                case '✅':
                    message.reply('O erro que Você reportou é Válido e será Corrigido.Obrigado por nos ajudar!');
                    break;
                    
                case '❌':
                    message.reply('O erro que você reportou já foi resolvido ou não foi um erro!');
                    break;

                case '🚫':
                    // Bloquear usuário para não reportar erros
                    message.reply('Você não tem mais permissão de reportar erros pois está fazendo mau uso da ferramenta! Comporte-se!');
                    break;

                case '🗑️':
                    embedMessage.delete();
                    break;
            
                default:
                    break;
            }
        });
    });

    return message.reply(`mensagem enviada com sucesso! Vou ler com calma e te retornar!`);
}