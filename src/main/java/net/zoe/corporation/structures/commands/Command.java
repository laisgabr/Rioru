package net.zoe.corporation.structures.commands;

import java.util.List;

public class Command {
   public String name;
   public List<String> aliases = List.of();
   public String description = "Not have a description proved";
   public String usage = "Not have a usage proved";
   public String category = "Miscellaneous";
   public boolean devsOnly = false;
   public boolean listInWebSite = true;
   public boolean enabled = true;
   public boolean hidden = false;
   public boolean canDisable = true;
   public int cooldown = 4;

   public void execute(CommandContext ctx) {
       return;
   };
}