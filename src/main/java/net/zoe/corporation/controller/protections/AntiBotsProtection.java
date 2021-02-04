package net.zoe.corporation.controller.protections;

import net.dv8tion.jda.api.Permission;
import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent;
import net.dv8tion.jda.api.exceptions.PermissionException;

public class AntiBotsProtection {
    public AntiBotsProtection(GuildMessageReceivedEvent event) {
        if(event.getAuthor().isBot()) {
            try {
                if(
                event.getMember().isOwner() ||
                event.getMember().getPermissions().contains(Permission.ADMINISTRATOR) ||
                !event.getGuild().getSelfMember().getPermissions().contains(Permission.BAN_MEMBERS)
                || event.getGuild().getSelfMember().getRoles().get(0).compareTo(event.getMember().getRoles().get(0)) == 0) return;
                event.getMember().ban(0, "Anti bots enabled");
            } catch(PermissionException e) {
                
            }
        }
    }
}