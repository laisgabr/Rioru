package com.github.shadowb64.rioru.utilities

object Database {
    fun getUserByID(id: String) =
        RioruAPIRequester.get("/database/users/getById", mapOf("id" to id))
    fun createUser(id: String) =
        RioruAPIRequester.post("/database/users/create", mapOf("id" to id))
}