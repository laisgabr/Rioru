const { dc , Discord , bot  } = require("discord.js")
cooldown: 4

exports.run = async(bot, message, args) => {
    const Discord = require('discord.js');
  
   const duh = await message.channel.send("Reaja 💬 para obter Ajuda pelo Chat ou Reaja 🔏 para obter Ajuda pelas Mensagens Diretas")
   await duh.react('💬')
   await duh.react('🔏')
   
   const dm = (reaction, user) => reaction.emoji.name === '🔏' && user.id === message.author.id;
   const chat = (reaction, user) => reaction.emoji.name === '💬' && user.id === message.author.id;
  
   const dm2 = duh.createReactionCollector(dm)
   const chat2 = duh.createReactionCollector(chat)
 
 chat2.on('collect', async r => {
    const embedAjuda = new Discord.MessageEmbed()
    .setTitle(`Olá meu nome é Yuuki Asuna e sou um Bot Discord focado em deixar tudo em Linha e Divertido`)
    .setDescription(`Espere todos os Emojis carregar para reagir`)
    .setColor("BLUE")
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
    .addField('Reaja aos emojis abaixo para saber sobre tal categoria', `----------------------------`)
    .addField("Minhas Categorias: ", `----------------------------`)
    .addField('👮‍♂️ Moderação', `----------------------------`)
    .addField('📂 Administração', `----------------------------`)
    .addField('🎶 Música', `----------------------------`)
    .addField('🎁 Diversão', `----------------------------`)
    .addField('💸 Economia', `----------------------------`)
    .addField('🎉 Sorteio', `----------------------------`)
    .addField('🌐 Miscelanea', `----------------------------`)
    .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))

const msg = await message.channel.send(embedAjuda)
await msg.react('⬅️')
await msg.react('👮‍♂️') 
await msg.react('📂')
await msg.react('🎶')
await msg.react('🎁')
await msg.react('💸')  
await msg.react('🎉')
await msg.react('🌐')
await msg.react('➡️')    
 
const baianorD = (reaction, user) => reaction.emoji.name === '⬅️' && user.id === message.author.id;
const Moderação = (reaction, user) => reaction.emoji.name === '👮‍♂️' && user.id === message.author.id;
const Administração = (reaction, user) => reaction.emoji.name === '📂' && user.id === message.author.id;
const Música = (reaction, user) => reaction.emoji.name === '🎶' && user.id === message.author.id;
const Diversão = (reaction, user) => reaction.emoji.name === '🎁' && user.id === message.author.id;
const Economia = (reaction, user) => reaction.emoji.name === '💸' && user.id === message.author.id;
const Sorteio = (reaction, user) => reaction.emoji.name === '🎉' && user.id === message.author.id;
const Miscelanea = (reaction, user) => reaction.emoji.name === '🌐' && user.id === message.author.id;
const baianor = (reaction, user) => reaction.emoji.name === '➡️' && user.id === message.author.id;


const Mod = msg.createReactionCollector(Moderação)
const Admin = msg.createReactionCollector(Administração)
const Music = msg.createReactionCollector(Música)
const Diver = msg.createReactionCollector(Diversão)
const Econ = msg.createReactionCollector(Economia)
const Sorte = msg.createReactionCollector(Sorteio)
const Miscela = msg.createReactionCollector(Miscelanea)
const setaESQ = msg.createReactionCollector(baianorD)
const setaDIR = msg.createReactionCollector(baianor)

Mod.on('collect', r => {  
    // organizado
     const embedMod = new Discord.MessageEmbed()
     .setTitle(`Comandos da Aba Moderação`)
     .setDescription(`Se ao lado do Comando Estiver um ';w;', Quer dizer que não tá Funcionando Corretamente`)
     .setColor("PURPLE")
     .addField(`Ban`, `Use o Poder do Martelo do Ban`)
     .addField(`Kick`, `Expulse algum membro do Servidor`)
     .addField(`Mute`, `Mute os bagunceiros do Servidor`)
     .addField(`Softban ;w;`, `Bane o membro e desbane logo em seguida`)
     .addField(`Unban ;w;`, `Desbane algum usuário`)
     .addField(`Unmute`, `Desmute alguem que foi mutado!!!`)
     .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
     msg.edit(embedMod)
     msg.reactions.removeAll()
  
 
 })
 
 Admin.on('collect', r => {
     const EmbedAdmin = new Discord.MessageEmbed()
     .setTitle(`Comandos da Aba Administração`)
     .setDescription(`Se ao lado do Comando Estiver um ';w;', Quer dizer que não tá Funcionando Corretamente`)
     .setColor("RANDOM")
     .addField(`Lock ;w;`, `Trava o canal atual`)
     .addField(`Unlock ;w;`, `Destrava o canal atual`)
     .addField('Administração não tem muito comando em breve tem mais...', `:pensive:`)
     .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
 
     msg.edit(EmbedAdmin)  
 });
 
 Music.on('collect', r => {
     const EmbedMusic = new Discord.MessageEmbed()
     .setTitle(`Comandos da Aba Música`)
     .setDescription(`Se ao lado do Comando Estiver um ';w;', Quer dizer que não tá Funcionando Corretamente`)
     .setColor("PINK")
     .addField("Nada está funcionando por causa do Block que o youtube deu uma nas pernas do bot...", `Estou testando a api do spotify para fazer um novo sistema de música pro bot`)
     .addField('Play ou P ;w;', `Toque umas batidas no seu servidor`)
     .addField('Skip ;w;', `Música errada ? Use skip`)
     .addField('Stop ;w;', `Cansou de ouvir Música ? Use esse Comando`)
     .addField('Queue ou Q ;w;', `Exiba a lista atual de reprodução`)
     .addField('Np ;w;', `Veja a música que está tocando agora`)
     .addField('Loop ;w;', `Da Loop no Queue ou na Música`)
     .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
 
     msg.edit(EmbedMusic)
 });
 
 Diver.on('collect', r => {
     const DiverEmbed = new Discord.MessageEmbed()
     .setTitle(`Comandos da Aba Diversão`)
     .setDescription(`Se ao lado do Comando Estiver um ';w;', Quer dizer que não tá Funcionando Corretamente`)
     .setColor("RANDOM")
     .addField(`Kiss ou Beijar`, `De um beijo em algum usuario`)
     .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
 
     msg.edit(DiverEmbed)
 });
 
 Econ.on('collect', r => {
     const EconEmbed = new Discord.MessageEmbed()
     .setTitle(`Comandos da Aba Economia`)
     .setDescription(`Se ao lado do Comando Estiver um ';w;', Quer dizer que não tá Funcionando Corretamente`)
     .setColor("RANDOM")
     .addField("Estou fazendo a implementação do Mongoose no projeto ainda desculpe")
     .addField("O resto dos comandos ta sendo feito", `Desculpa mas até o fim da beta ta tudo feito`)
     .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
 
     msg.edit(EconEmbed)
 
     r.users.remove(message.author.id)
     r.users.remove(bot.user.id)
 });
 
 Sorte.on('collect', r => {
     const SorteEmbed = new Discord.MessageEmbed()
     .setTitle(`Comandos da Aba Sorteio`)
     .setDescription(`Se ao lado do Comando Estiver um ';w;', Quer dizer que não tá Funcionando Corretamente`)
     .setColor("RANDOM")
     .addField("Vishh", `Me desculpa por ser uma merda mas eu to fazendo os comandos todo dia ok ?`)
     .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
 
     msg.edit(SorteEmbed)
 });
 
 Miscela.on('collect', r => {
     // organizado
     const MiscelaEmbed = new Discord.MessageEmbed()
     .setTitle(`Comandos da Aba Miscelanea`)
     .setDescription(`Se ao lado do Comando Estiver um ';w;', Quer dizer que não tá Funcionando Corretamente`)
     .setColor("WHITE")
     .addField("Ajuda", `Mostra os meus Comandos`)
     .addField("Avatar", `Mostra o seu Avatar ou o do Usuário Mencionado`)
     .addField("Botinfo", `Mostra as Minhas Informações Básicas`)
     .addField("Djs ou Discord.js", `Mostra algo do discord.js`)
     .addField("Donate", `Quer ajudar ? Que fofo :3 . Use esse Comando e saiba como Doar`)
     .addField("Invite", `Mostra o meu Invite para convidar para o seu Servidor!`)
     .addField("Ping", `Mostra a Minha Latencia e o Ping da API`)
     .addField("Say", `O bot fala o que voce quiser.. Ele dedura quem mandou ela falar aquilo....`)
     .addField("Serverinfo", `Mostra informações do servidor`)
     .addField("SetNick", `Seta um nickname pra voce.Só funciona se o bot for acima de voce e ele tiver a permissão Gerenciar Apelidos`)
     .addField("Uptime", `Mostra meu tempo de Atividade`)
     .addField("Userinfo", `Mostra as suas Informações ou de outros Usuários`)
     .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
 
     msg.edit(MiscelaEmbed)
 });
});

 dm2.on('collect', async r => {
   message.channel.send(`<@${message.author.id}>**, Enviei meus comandos em seu DM**`)
   const embedDm = new Discord.MessageEmbed()
   .setTitle(`Olá,Meu nome é Yuuki Asuna e sou um Bot Discord focado em deixar tudo em Linha e Divertido`)
    .setDescription(`Espere todos os Emojis carregar para reagir... Para melhor uso do comando,Peço que reaja e depois retire a reação pois na dm,Não consigo tirar...`)
    .setColor("RED")
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
    .addField('Reaja aos emojis abaixo para saber sobre tal categoria', `----------------------------`)
    .addField("Minhas Categorias: ", `----------------------------`)
    .addField('👮‍♂️ Moderação', `----------------------------`)
    .addField('📂 Administração', `----------------------------`)
    .addField('🎶 Música', `----------------------------`)
    .addField('🎁 Diversão', `----------------------------`)
    .addField('💸 Economia', `----------------------------`)
    .addField('🎉 Sorteio', `----------------------------`)
    .addField('🌐 Miscelanea', `----------------------------`)
    .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
    const msg3 = await message.author.send(embedDm)
    await msg3.react('⬅️')
    await msg3.react('👮‍♂️') 
    await msg3.react('📂')
    await msg3.react('🎶')
    await msg3.react('🎁')
    await msg3.react('💸')  
    await msg3.react('🎉')
    await msg3.react('🌐')
    await msg3.react('➡️')


 });
    

}