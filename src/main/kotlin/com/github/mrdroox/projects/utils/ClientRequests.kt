package com.github.mrdroox.projects.utils

import okhttp3.MediaType.Companion.toMediaTypeOrNull
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody
import okhttp3.RequestBody.Companion.toRequestBody
import okhttp3.ResponseBody

class ClientRequests {
    companion object {
        private val client = OkHttpClient()
        fun get(url: String): ResponseBody? {
            val request: Request = Request.Builder()
                .url(url)
                .build()

            try {
                client.newCall(request).execute().use { response -> return response.body }
            } catch (e: Exception) {
                return null
            }
        }

        fun post(url: String, post: String): ResponseBody? {
            val body: RequestBody = post.toRequestBody("application/json; charset=utf-8;".toMediaTypeOrNull())

            val request: Request = Request.Builder()
                .url(url)
                .post(body)
                .build()

            try {
                client.newCall(request).execute().use { response -> return response.body }
            } catch (e: Exception) {
                return null
            }
        }
    }
}