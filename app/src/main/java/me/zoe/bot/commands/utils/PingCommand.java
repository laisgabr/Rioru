package me.zoe.bot.commands.utils;

import com.jagrosh.jdautilities.command.CommandEvent;
import com.jagrosh.jdautilities.command.Command;

public class PingCommand extends Command {
    public PingCommand() {
        this.name = "example";
        this.aliases = new String[]{"test","demo"};
        this.help = "gives an example of commands do";
    }

    @Override
    protected void execute(CommandEvent event) {
        event.reply("Hey look! This would be the bot's reply if this was a command!");
    }
}