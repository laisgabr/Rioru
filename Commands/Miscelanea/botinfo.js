const Discord = require('discord.js');
const { dono, linguagem, data, colaboradores } = require('../../config.json');

exports.run = async(bot, message, args, prefix) => {
    const EmbedBot = new Discord.MessageEmbed()
        .setTitle(`Minhas Informações`)
        .setDescription(`Coisas basicas sobre mim`)
        .setColor("RED")
        .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 2048 }))
        .addField('Meu Criador é o :', ```${dono}```)
        .addField('Meu Prefixo no Servidor: ', ```${prefix}```)
        .addField(`Colaboradores: `, ```${colaboradores}```)
        .addField('Minha Linguagem é', ```${linguagem}```)
        .addField('Data de Criação', ```${data}```)
        .setFooter(`Minhas Informações`)

    message.channel.send(EmbedBot);
}