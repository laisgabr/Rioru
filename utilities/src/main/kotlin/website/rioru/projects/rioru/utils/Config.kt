package website.rioru.projects.rioru.utils

import org.json.JSONObject

object Config {
    private val config = JSONObject(FileAction.readFile("config.json"))

    object string {
        operator fun get(objectName: String, key: String): String = config.getJSONObject(objectName).getString(key)
    }

    object int {
        operator fun get(objectName: String, key: String): Int = config.getJSONObject(objectName).getInt(key)
    }

    object boolean {
        operator fun get(objectName: String, key: String): Boolean = config.getJSONObject(objectName).getBoolean(key)
    }

    object jsonObject {
        operator fun get(objectName: String, key: String): JSONObject =
            config.getJSONObject(objectName).getJSONObject(key)
    }
}
