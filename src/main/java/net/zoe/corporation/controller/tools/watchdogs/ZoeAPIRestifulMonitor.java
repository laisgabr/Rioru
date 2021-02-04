package net.zoe.corporation.controller.tools.watchdogs;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

import java.io.IOException;

public class ZoeAPIRestifulMonitor {
  public static boolean isOnline() throws IOException {
      OkHttpClient client = new OkHttpClient();

        Request request = new Request.Builder()
                .url("http://")
                .build();

        try (Response response = client.newCall(request).execute()) {    
            return true;
        } catch(Exception e) {
          return false;
        } 
  }
}