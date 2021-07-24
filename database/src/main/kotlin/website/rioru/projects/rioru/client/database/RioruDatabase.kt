package website.rioru.projects.rioru.client.database

import com.mongodb.ConnectionString
import com.mongodb.MongoClientSettings
import com.mongodb.client.MongoClients
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.launch
import website.rioru.projects.rioru.utils.Config

class RioruDatabase {
    suspend fun create() {
        coroutineScope {
            launch {
                println(MongoClients.create(
                    MongoClientSettings.builder()
                        .applyConnectionString(
                            ConnectionString(Config.string["uri"])
                        )
                        .retryReads(Config.boolean["retryReads"])
                        .retryWrites(Config.boolean["retryWrites"])
                        .build()
                ).listDatabaseNames())
            }
        }.start()
    }
}

operator fun Config.boolean.get(key: String): Boolean = Config.boolean["database", key]
operator fun Config.string.get(key: String): String = Config.string["database", key]
