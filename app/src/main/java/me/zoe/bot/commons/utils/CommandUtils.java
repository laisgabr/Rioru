package me.zoe.bot;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

public class CommandUtils {
    private final LinkedList<Command> commands = new LinkedList<>();

    public void registerCommands(Command... commands) {
        this.commands.addAll(Arrays.asList(commands));
    }

    /**
     * 
     * @return commands
     */
    public List<Command> getCommands() {
        return commands;
    }

    /**
     * 
     * @param name
     * @return Command
     */
    public Command getCommand(String name) {
        return getCommands().stream().filter(command -> command.getName().toLowerCase().equals(name)).findFirst().get();
    }
}
