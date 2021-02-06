package net.zoe.corporation.commands.utils;

import net.zoe.corporation.structures.commands.Command;
import net.zoe.corporation.structures.commands.CommandContext;

import java.util.List;

public class PingCommand extends Command {
    public String name = "ping";
    public List<String> aliases = List.of("latency");
    public String description = "Show my latency";
    public String usage = "<prefix>ping [clusters/shards]";
    public String category = "Utils";
    public boolean canDisable = false;
    public int cooldown = 5;

    @Override
    public void execute(CommandContext ctx) {
        ctx.getJDA().getRestPing();
    }
}
