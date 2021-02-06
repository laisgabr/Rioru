package net.zoe.corporation.commands.developer;

import net.zoe.corporation.structures.commands.CommandContext;
import net.zoe.corporation.structures.commands.Command;

import java.util.List;

public class RegenerateRiotAPIKeyCommand extends Command {
    public String name = RegenerateRiotAPIKeyCommand.class.getName().replace("Command", "").toLowerCase();
    public List<String> aliases = List.of("a");
    public void execute(CommandContext ctx) {
        ctx.getArgs();
    }
}
