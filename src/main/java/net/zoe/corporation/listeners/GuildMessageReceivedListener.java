package net.zoe.corporation.listeners;

import net.dv8tion.jda.api.hooks.ListenerAdapter;
import net.zoe.corporation.structures.commands.Command;
import net.zoe.corporation.structures.commands.CommandContext;
import net.zoe.corporation.structures.commands.CommandManager;
import net.zoe.corporation.structures.commands.CommandOptions;
import net.zoe.corporation.utilities.ZoeTranslateGetter;
import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent;

import java.util.Arrays;
import java.util.List;
import java.util.regex.Pattern;

public class GuildMessageReceivedListener extends ListenerAdapter {
    @Override
    public void onGuildMessageReceived(GuildMessageReceivedEvent event) {
    
        if(event.getMessage().isWebhookMessage() || event.getAuthor().isBot()) return;
        

        if(!event.getMessage().getContentRaw().startsWith(" prefix ")) return;
        if(event.getMessage().getContentRaw() == event.getJDA().getSelfUser().getId() + ">") {
            event.getChannel().sendMessage("Hi, my name is Zoe").queue();
            return;
        }
        
        String[] command = event.getMessage().getContentRaw()
        .replaceFirst("(?i)" + Pattern.quote("prefix"), "")
        .split("\\s+");
        
       /* Command cmd = CommandManager.getCommand(command[0].toLowerCase());
        
        if (cmd != null) {
            event.getChannel().sendTyping().queue();
            List<String> args = Arrays.asList(command).subList(1, command.length);
            
            CommandContext ctx = new CommandContext(event, args);

            ZoeTranslateGetter t = new ZoeTranslateGetter();

            new CommandOptions(cmd, event, t);
            cmd.execute(ctx);
            
        } else {
              
        }
        */
    }
}