module.exports.run = async(bot, message, args) => {
 
     const db = require('quick.db')
    let user;
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]).user;
        }
    
        let balance = db.get(`dinhelo_${message.author.id}`);
    
        if (!user) return message.channel.send("Please mention the user or input the user ID.");
        if (user.bot || user === bot.user) return message.channel.send("This user is a bot.");
        if (user.id === message.author.id || user === message.author) return message.channel.send("Por que voce quer transeferir as Moedas Estrelares pra voce ?");
    
        let amount = parseInt(args[1]);
        if (!amount) return message.channel.send("Please input a credits that you want to transfer it.");
        if (isNaN(amount)) return message.channel.send("Please input a valid number.");
        // isNaN = is Not a Number.
    
        if (!balance || balance == 0) return message.channel.send("Your wallet is empty.");
        if (amount > balance) return message.channel.send("You don't have an enough credits to transfer. That is way too much.");
        if (dinhelo === 0) return message.channel.send("You transfer, nothing? No. You cannot.");
    
        await db.add(`dinhelo_${message.author.id}`, amount);
        await db.subtract(`dinhelo_${message.author.id}`, amount);
    
        return message.channel.send(`You've been transferred to your friends (${user.tag}) $${amount} credits!`);
    }