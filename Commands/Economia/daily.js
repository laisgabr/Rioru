const Discord = require("discord.js");
const db = require("quick.db");
let ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
    let pad_zero = num => (num < 10 ? '0' : '') + num;
    let cooldown = 8.64e+7; // 24 Horas em Ms
    let amount = 3250; // How much user will get it in their dailies.

    let lastDaily = await db.get(`lastDaily.${message.author.id}`);
    let buck = await db.get(`dinhelo_${message.author.id}`);

    try {
        
        if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
            let timeObj = ms(cooldown - (Date.now() - lastDaily));

            let hours = pad_zero(timeObj.hours).padStart(2, "0"),
                mins = pad_zero(timeObj.minutes).padStart(2, "0"),
                secs = pad_zero(timeObj.seconds).padStart(2, "0");

            let finalTime = `**${hours}:${mins}:${secs}**`;
            return message.channel.send(`${message.author},Você precisa esperar ${finalTime} para pegar seu Daily novamente.`);
        } else {
            db.set(`lastDaily.${message.author.id}`, Date.now());
            db.add(`dinhelo_${message.author.id}`, amount);
            return message.channel.send(`Yeeah **${message.author}!** Você ganhou 3250 Moedas Estrelares`);
        }

    } catch (error) {
        console.log(error);
        return message.channel.send(`Aconteceu um erro :  ${error}`);
    }
}