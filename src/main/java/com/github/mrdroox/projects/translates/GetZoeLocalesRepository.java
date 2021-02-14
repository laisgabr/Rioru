package com.github.mrdroox.projects.translates;

import kotlin.jvm.JvmStatic;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import javax.annotation.Nullable;

import java.io.FileReader;

public class GetZoeLocalesRepository {
    @Nullable
    @JvmStatic
    public static String getJSON(String LocaleFolderName, String JsonName, String value) {
        JSONParser jsonParser = new JSONParser();
        try (FileReader reader = new FileReader("./src/main/java/com/github/mrdroox/projects/translates/" + LocaleFolderName + "/" + JsonName + ".json")) {
            Object obj = jsonParser.parse(reader);
            JSONObject JSON = (JSONObject) obj;
            return (String) JSON.get(value);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

        return null;
    }
}



