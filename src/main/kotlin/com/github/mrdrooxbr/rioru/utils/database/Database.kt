package com.github.mrdrooxbr.rioru.utils.database

import com.github.mrdrooxbr.rioru.utils.database.models.UserModel
import com.github.mrdrooxbr.rioru.utils.database.models.utils.Blacklist
import com.mongodb.ConnectionString
import com.mongodb.MongoClientSettings
import com.mongodb.client.MongoClient
import org.litote.kmongo.KMongo
import org.litote.kmongo.getCollection

class Database(uri: ConnectionString) {
    init {
        instance = KMongo.createClient(
            MongoClientSettings.builder().applyConnectionString(uri)
                .retryWrites(true).build()
        )
    }

    companion object {
        private lateinit var instance: MongoClient

        fun createUser(id: String) {
            val database = instance.getDatabase("rioru")

            val col = database.getCollection<UserModel>()
            // CRIANDO O USUARIO PELO MODEL / FALTA INSERÇÃO DE MAIS DADOS...
            col.insertOne(
                UserModel(
                id,
                Blacklist(false, null, null, null),
            ))

        }

        fun getDatabase(): MongoClient {
            return instance
        }
    }
}