package net.zoe.corporation.commands.developer;

import net.zoe.corporation.structures.commands.CommandContext;
import net.zoe.corporation.structures.commands.Command;

public class RegenerateRiotAPIKeyCommand extends Command {
    public String name = RegenerateRiotAPIKeyCommand.class.getName().replace("Command", "").toLowerCase();
    public String[] aliases = { "rege" };
    public void execute(CommandContext ctx) {
        ctx.getArgs();
    }
}
