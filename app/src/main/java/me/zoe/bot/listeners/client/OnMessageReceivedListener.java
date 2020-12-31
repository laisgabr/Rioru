package me.zoe.bot.listeners.client;

import net.dv8tion.jda.api.events.message.MessageReceivedEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;

public class OnMessageReceivedListener extends ListenerAdapter {
    @Override
    public void onMessageReceived(MessageReceivedEvent event) {
        String prefix = "";
        if(event.getChannelType().toString().toUpperCase() != "TEXT") return;
        if(event.getAuthor().isBot()) return;

        if(!event.getMessage().getContentRaw().startsWith(prefix)) return;
        String[] args = event.getMessage().getContentRaw().replaceFirst(prefix, "").trim().split(" ");
       // Criar uma variavel de tipo string com função de remover a primeiro elemento do array args
    }
}
