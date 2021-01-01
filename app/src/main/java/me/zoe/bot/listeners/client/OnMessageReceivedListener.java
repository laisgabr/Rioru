package me.zoe.bot.listeners.client;

import net.dv8tion.jda.api.events.message.MessageReceivedEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;

import java.util.Arrays;

public class OnMessageReceivedListener extends ListenerAdapter {
    @Override
    public void onMessageReceived(MessageReceivedEvent event) {
        String prefix = "zoe!";
        if(event.getChannelType().toString().toUpperCase() != "TEXT") return;
        if(event.getAuthor().isBot()) return;

        if(!event.getMessage().getContentRaw().startsWith(prefix)) return;
        String[] args = event.getMessage().getContentRaw().replaceFirst(prefix, "").trim().split(" ");
        event.getChannel().sendMessage("" + Arrays.toString(args).replace("[", "").replace("]", "").replace(",", "")).queue();

        String command = args[0];
    }
}
