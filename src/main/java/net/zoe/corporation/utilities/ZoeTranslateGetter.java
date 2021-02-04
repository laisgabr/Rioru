package net.zoe.corporation.utilities;

public class ZoeTranslateGetter {
    public String get(String translate) {
        final String[] received = translate.split("/");
  

        return received[0];
    }
}
