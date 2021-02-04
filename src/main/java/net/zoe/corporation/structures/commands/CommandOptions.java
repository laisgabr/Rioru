package net.zoe.corporation.structures.commands;

import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent;
import net.zoe.corporation.Config;
import net.zoe.corporation.utilities.ZoeTranslateGetter;

public class CommandOptions {
    public CommandOptions(Command cmd, GuildMessageReceivedEvent event, ZoeTranslateGetter t) {
        String author = event.getAuthor().getId();
        // Mr Gambiarras 
        if(cmd.devsOnly && 
        author != Config.owners[0] 
        && author != Config.owners[1] 
        && author != Config.owners[2]) {
            event.getChannel().sendMessage("macaco").queue();
        }
    }
}
