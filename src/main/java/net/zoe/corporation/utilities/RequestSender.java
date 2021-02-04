package net.zoe.corporation.utilities;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.RequestBody;
import okhttp3.MediaType;

import java.io.IOException;
import java.util.Objects;

public class RequestSender {   
    public static Object sendGET(String url) throws IOException {
        OkHttpClient client = new OkHttpClient();

        Request request = new Request.Builder()
                .url(url)
                .build();

        try (Response response = client.newCall(request).execute()) {    
            return Objects.requireNonNull(response.body());
        } catch(NullPointerException e) {
            throw new RuntimeException("RequestSender#sendGET() received a response null");
        }
    }
    
    public static Object sendPOST(String url, String PostContent) throws IOException {
        // "{\"id\": 4219321300,\"dailyTimestamp\":\"9322128391\"}"; PostContent Example
        OkHttpClient client = new OkHttpClient();
        RequestBody body = RequestBody.create(MediaType.parse("application/json; charset=utf-8;"), PostContent);

       Request request = new Request.Builder()
       .url(url)
       .post(body)
       .build();
       
       try {
            var call = client.newCall(request);
            Response response = call.execute();
            return Objects.requireNonNull(response.body());
       } catch(NullPointerException e) {
           throw new RuntimeException("RequestSender#sendPOST() received a response null");
       }
    }
}
