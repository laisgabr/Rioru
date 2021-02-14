package com.github.mrdroox.projects.translates;

import kotlin.jvm.JvmStatic;

public class ZoeTranslates {
    @JvmStatic
    public String get(String type, String jsonName, String value) {
        return GetZoeLocalesRepository.getJSON(type, jsonName, value);
    }
}
