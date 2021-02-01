package net.zoe.corporation.commands.developer;

import net.zoe.corporation.structures.commands.annotations.Command;
import net.zoe.corporation.structures.commands.CommandContext;
import net.zoe.corporation.structures.commands.CommandBase;

@Command(
        name = "riotkeychange",
        aliases = { "regenriotkey", "riotkeyregenerate" },
        category = "Developer",
        developersOnly = true,
        enabled = true,
        canDisable = false,
        hidden = true
)
public class RegenerateRiotAPIKeyCommand extends CommandBase {
    @Override
    public void execute(CommandContext ctx) {
        
    }
}
