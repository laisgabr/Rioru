package me.zoe.bot.commons.utils;

import me.zoe.bot.Zoe;

import net.dv8tion.jda.api.hooks.ListenerAdapter;
import net.dv8tion.jda.api.Permission;

public abstract class Command extends ListenerAdapter {
    public final Zoe bot;
    protected String name;
    protected List<String> aliases;
    protected String description;
    protected String usage;
    protected String category;
    protected Integer cooldown;
    protected boolean enabled = true;
    protected boolean onlyDevs = false;
    protected Permission[] userPermissions;
    protected Permission[] zoePermissions;

    public abstract void execute(CommandContext ctx);

    public String getName() {
        return name;
    }

    public List<String> getAliases() {
        return aliases;
    }
    
    public String getDescription() {
        return description;
    }

    public String getUsage() {
        return usage;
    }

    public String getCategory() {
        return category;
    }

    public int getCooldown() {
        return cooldown;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public boolean isOnlyDevs() {
        return onlyDevs;
    }

    public Permission[] getUserPermissionsNeeded() {
        return userPermissions;
    }

    public Permission[] getZoePermissionsNeeded() {
        return zoePermissions;
    }
}
