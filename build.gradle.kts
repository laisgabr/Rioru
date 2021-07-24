plugins {
    kotlin("jvm")
}

buildscript {
    repositories {
        maven {
            url = uri("https://plugins.gradle.org/m2/")
        }
    }
    dependencies {
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:${properties["kotlin.version"]}")
    }
}

repositories {
    google()
    mavenCentral()
}

subprojects {
    apply(plugin = "kotlin")
    repositories {
        google()
        mavenCentral()
    }

    buildscript {
        ext.set("kotlin_version", properties["kotlin.version"])
    }

    dependencies {
        // Hox
        implementation(platform(kotlin("bom")))
        implementation(kotlin("stdlib-jdk8"))
        implementation("com.google.guava:guava:30.0-jre")
        implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:${properties["coroutines.version"]}")
        implementation("dev.kord:kord-core:${properties["kord.version"]}")
        implementation("org.json:json:20210307")
    }
}