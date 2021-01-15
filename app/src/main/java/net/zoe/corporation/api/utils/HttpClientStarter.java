package net.zoe.corporation.api.utils;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

import java.io.IOException;
import java.util.Objects;

public class HttpClientStarter {
    public static Object createHttpClientAndGetAPI(String url) throws IOException {
        OkHttpClient client = new OkHttpClient();

        Request request = new Request.Builder()
                .url(url)
                .build();

        try (Response response = client.newCall(request).execute()) {

            return Objects.requireNonNull(response.body());
        }
    }
}
