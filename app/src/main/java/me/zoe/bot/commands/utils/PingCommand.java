package me.zoe.bot.commands.utils;

import java.util.Arrays;

import me.zoe.bot.commons.utils.Command;
import me.zoe.bot.commons.utils.CommandContext;

public class PingCommand extends Command {
    PingCommand() {
        this.name = "ping";
        this.aliases = Arrays.asList("latencia", "pingpong");
        this.description = "Mostra meu ping atual";
        this.usage = "<prefix>ping";
        this.category = "Utils";
        this.cooldown = 5;
    }

    @Override
    public void execute(CommandContext ctx) {
        System.out.println(ctx.getChannel());
    }
}
