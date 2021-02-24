package com.github.mrdroox.projects.utilities

import io.github.cdimascio.dotenv.dotenv

class Config {
    companion object {
        private val dotenv = dotenv()

        fun get(name: String): String {
            return dotenv[name.toUpperCase()]
        }
    }
}