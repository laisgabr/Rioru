package net.zoe.corporation.structures.commands;

public @interface Command {
    String name();
    default String[] aliases() {
        return {};
    };
    
}
