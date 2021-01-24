package net.zoe.corporation.structures.commands;

public @interface Command {
    String name();

    String aliases();

    String category();

    boolean developersOnly();

    boolean enabled();

    boolean canDisable();

    boolean hidden();
}
