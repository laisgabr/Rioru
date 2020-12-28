package me.zoe.bot.listeners.client;

import net.dv8tion.jda.api.events.ReadyEvent;

public class OnReadyListener {
    public final ReadyEvent event;
    public OnReadyListener(ReadyEvent event) {
        this.event = event;
        load();
    }

    public void load() {
        System.out.println("Zoe is now Online :D");
        System.out.println("Servidores Disponiveis: " + this.event.getGuildAvailableCount() +
                " Servidores Indisponiveis: " + this.event.getGuildUnavailableCount());

    }
}
