module.exports.run = async (bot, message, args) => {
    const Discord = require('discord.js')
    const Donate = new Discord.MessageEmbed()
    .setTitle(`Vai doar ? own :3`)
    .setColor("BLUE")
    .setDescription(`A única forma de Doar para mim é pelo Mercado pago abaixo`)
    .addField("Afinal não é todo mundo que tem dinheiro pra pagar uma Hospedagem", `Sério, Sua Doação vai ajudar de mais`)
    .addField("Atualmente, O bot está hospedado na Discloud", `Atualmente, Meu criador paga o Plano Platinum da Discloud com 1024 de RAM`)
    .addField("Para doar para Mim é só enviar qualquer valor em dinheiro... é sério :", `arthurphelipe112@gmail.com`)
    message.channel.send(Donate)
}