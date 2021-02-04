package net.zoe.corporation.structures.commands;

public class Command {
   public String name;
   public String[] aliases = {}; 
   public String description = "Not have a description provied";
   public String usage = "Not have a description provied";
   public String category = "Miscellaneous";
   public boolean devsOnly = false;
   public boolean listInWebSite = true;
   public boolean enabled = true;
   public boolean hidden = false;
   public int cooldown = 4;

   public void execute(CommandContext ctx) {
       return;
   };
}