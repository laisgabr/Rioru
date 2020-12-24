import me.zoe.bot.Zoe;

public class CommandContext {
    CommandContext(Zoe client, String prefix) {
        this.client = client;
        this.prefix = prefix;
        this.translate = this.client.apis.find(c -> c == "translate");
    }
}