const Discord = require('discord.js')

const bot = new Discord.Client()
const client = new Discord.Client()

const queue = new Map()
const ytsearch = require('yt-search')
const ytdl = require('ytdl-core')

const config = require('./config.json')

const fs = require('fs')

const firebase = require('firebase')

bot.on("ready", () => {
    console.log("Carregando Evento Ready e Message...")
    console.log(`Carregando Comandos...`);
    console.log(`Logada como ${bot.user.tag}`);
    let status = [
        `Meu prefixo é ya! :D`,
        `Sabia que tenho um sistema de músicas em desenvolvimento ?`,
        `Me ajude por favor ,w,`,
        `Amo todos que usam minha beta diariamente :)`,
        `Estou sendo desenvolvida pelo MrGamingBR#0001 esse lindo :3`,
        `Estou na versão Beta qualquer erro ou bug relate no Suporte`,
        `Open Source ? Talvez um dia ;_;`,
        `Deixei de ser Beta mas ainda falta muita coisa .-.`
    ],
    i = 0;
setInterval(() => bot.user.setActivity(`${status[i++ % status.length]}`, {
    type: "STREAMING"
}), 1000 * 60);
});


bot.on("message", async message => {
    if (message.author.bot) return;
    
   if (!message.content.startsWith(config.prefix)) return;
   
   if(message.channel.type === 'dm' && message.author.id !== '468817505318862882') {
 return message.channel.send('Fui programada para não responder no privado!');
}

const db = require('quick.db')

   const mentionRegex = (`<@!${bot.user.id}`) || (`<@${bot.user.id}>`)

   if (message.content.match(mentionRegex)) return message.channel.send(`Olá <@${message.author.id}>, Meu nome é Yuuki Asuna e meu prefixo é ${this.prefixo}`)

  let args = message.content.split(" ").slice(1);
 
    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);

    if(command === 'customPrefix' || command === 'PrefixoCustomizado') {
      if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply("Você não disse um Prefixo")
      let data = db.get(`prefixo.${message.guild.id}`)
      if (message.flags[0] === "default") {
        await db.delete(`prefixo.${message.guild.id}`);
        return message.channel.send("Voltei para o meu prefixo original");
      }
      
      let symbol = args.join(" ");
      if (!symbol) return message.channel.send("Por Favor, Coloque um Prefixo");
      
      db.set(`prefix.${message.guild.id}`, symbol);
      return message.channel.send(`Meu prefixo agora é **${symbol}**`);
    }


    let afk = new db.table("AFKs"),
    authorStatus = await afk.fetch(message.author.id),
    mentioned = message.mentions.members.first();

if (mentioned) {
  let status = await afk.fetch(mentioned.id);
  
  if (status) {
   return message.channel.send(`Ei <@${message.author.id}>, O(a) <@${mentioned.id}> está AFK!`).then(i => i.delete({timeout: 5000}));
  }
}

if (authorStatus) {
  message.channel.send(`Bem-Vindo(a) de Volta <@${message.author.id}>.`).then(i => i.delete({timeout: 5000}));
  afk.delete(message.author.id)
}



    if (command === 'setAFK') {
      const status = new db.table("AFKs");
      let afk = await status.fetch(message.author.id);

      if (!afk) {
       return message.reply(`<@${message.author.id}>,AFK ativo com sucesso!. O AFK será desativado caso falar no Chat.`)
      } else {
       return message.reply("AFK desativado com Sucesso!")
      }
    }

    var handler = require('./EventHandler/handler')
    return handler.run(client, bot, message, args, queue, command, config.prefix)
});

bot.login(config.token)