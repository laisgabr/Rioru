const config = require(`./bot.js`)

module.exports = {

    start: {
      perms: ":warning: You lack the `manage messages` permission to use this command or the :",
      channel: ":warning: Por favor, Mencione algum canal",
      duration: ":warning: Please indicate the duration of the giveaway. Arguments available `s` for seconds, `m` for minutes, `h` hourly and `d` for the days. Example `10m`.",
      argswinners: ":warning: Please indicate the number of winners. Example `1` for one winner or `2` for two winners.",
      prize: ":warning: Please indicate the prize to be won. Example `a nitro`.",
      good: ":tada: Eu iniciei o sorteio no canal:",

      giveaway: "**Sorteio** 🎁",
      giveawayEnded: "**Sorteio Acabado** 🎁",

      timeRemaining: `Tempo Restando : **${duration}** !`, 
      inviteToParticipate: (message) => `Clique em ${config.reaction} para Participar! !`,
      winMessage: (message) => `${config.reaction} Parabéns, ${winners} ! Voce(s) ganharam **${prize}** !`,
      embedFooter: "Giveaway",
      noWinner: "Sorteio cancelado porque não tem Participantes nele",
      hostedBy: "Por : {user}",
      winners: "Ganhador(es)",
      endedAt: "Acabou o Sorteio",
    },
  
    units: {
      seconds: "Segundo(s)",
      minutes: "Minuto(s)",
      hours: "Hora(s)",
      days: "Dias(s)",
    },

    help: {
      title: "Help panel",
      description: "Find the list of my orders on this panel, obligatory arguments `<>`.",

      start: (message) => `**${config.prefix}start**`,
      startdescription: (message) => `This command is used to launch a giveaway.\nUsage \`${config.prefix}start <#salon> <time> <winners> <lot>\`.`,

      end: (message) => `**${config.prefix}end**`,
      enddescription: (message) => `This command is used to delete a giveaway.\nUsage \`${config.prefix}end <ID giveaway>\`.`,

      reroll: (message) => `**ya!reroll**`,
      rerolldescription: (message) => `This command is used to restart a giveaway.\nUsage \`${config.prefix}reroll <ID giveaway>\`.`,

      edit: (message) => `**ya!edit**`,
      editdescription: (message) => `.\n \`ya!edit <ID do Sorteio> <Ganhadores> <Novo Premio>\`.`
    },

    end: {
      perms: ":warning: You lack the `manage messages` permission to use this command or the :",
      msg: ":warning: Please enter a giveaway ID.",
      err: ":warning: I couldn't find anything for this giveaway :",
      errmod: ":warning: An error occurred, maybe this giveaway is already finished or deleted ?",
      good: ":hourglass_flowing_sand: I'm deleting this contest in :"
    },

    reroll: {
      perms: ":warning: Voce não tem a permissão `Gerenciar Mensagens` para continuar",
      msg: ":warning: Por favor, Coloque o id de algum sorteio que foi finalizado",
      err: ":warning: Eu não encontrei esse Sorteio",
      good: `:tada: Novo(s) ganhador(es) são ${winners} ! Parabéns !`,
      parts: ":warning: Não tem participantes nesse Sorteio e assim não tem como eu escolher um!"
    },

    edit: {
      perms: ":warning: Voce não tem a Permissão `Gerenciar Mensagens` para continuar",
      msg: ":warning: Por favor coloque um id de um Sorteio",
      argswinners: ":warning: Please indicate the number of winners. Example `1` for one winner or `2` for two winners.",
      prize: ":warning: Por favor, Indique um premio por exemplo: `Nitro`.",
      err: ":warning: I couldn't find anything for this giveaway :",
      good: ":tada: I'm in the process of modifying the giveaway with the new parameters. The changes will take effect in 5 seconds.",
      errmod: ":warning: An error occurred, maybe this giveaway is already finished or deleted ?"
    },

    set: {
      perms: ":warning: You lack the `manage messages` permission to use this command.",
      msg: ":warning: Please indicate a function to be defined `mention` to mention the entire server if a giveaway is running, `logs` to define a room with the giveaway logs, and `role` choose a role so that users who have it can launch giveaways without having permission to manage messages.",
      args: ":warning: Please indicate a function `on` to activate or `off` to disable.",
      erroff: ":warning: This function is already disabled. Try turning it on to see ?",
      erron: ":warning: This function is already activated. Try turning it off to see ?",
      mon: ":dividers: I have activated the function `everyone` for the next giveaways.",
      moff: ":dividers: I've disabled the function `everyone` for the next giveaways.",
      channel: ":warning: Please point me to a text chat room, `#chat` to define the logs.",
      chon: ":dividers: I set up the giveaways logs on the show :"
    }

};