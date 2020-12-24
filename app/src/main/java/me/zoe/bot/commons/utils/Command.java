package me.zoe.bot.commons.utils;

import me.zoe.bot.Zoe;

public class Command {
    Command(Zoe client, Object options) {
        if(client == null || options == null) return;
        this.client = client;
        this.options = options;

        this.cmdSettings = new Object();
        this.cmdSettings.name = options.name;
        this.cmdSettings.aliases = options.aliases;
        this.cmdSettings.description = options.description;
        this.cmdSettings.usage = options.usage;
        this.cmdSettings.category = options.usage;
        this.cmdSettings.cooldown = options.cooldown;
        this.cmdSettings.userPermissions = options.userPermissions;
        this.cmdSettings.zoePermissions = options.zoePermissions;
    }
}
