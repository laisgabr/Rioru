val compileKotlin: org.jetbrains.kotlin.gradle.tasks.KotlinCompile by tasks

plugins {
    kotlin("jvm")
    application
}

allprojects {
    repositories {
        google()
        mavenCentral()
        maven("https://jitpack.io")
    }

    dependencies {
        implementation(platform(kotlin("bom")))
        implementation(kotlin("stdlib-jdk8"))
        api("com.google.guava:guava:30.0-jre")
        implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:${properties["coroutines.version"]}")
        implementation("dev.kord:kord-core:${properties["kord.version"]}")
    }
}

repositories {
    mavenCentral()
    google()
}

dependencies {
    implementation(project(":utilities"))
    implementation(platform(kotlin("bom")))
    implementation(kotlin("stdlib-jdk8"))
    api("com.google.guava:guava:30.0-jre")
    implementation("dev.kord:kord-core:${properties["kord.version"]}")
    implementation("org.slf4j:slf4j-simple:1.7.30")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:${properties["coroutines.version"]}")
    implementation("dev.kord.x:emoji:0.5.0")
}

java {
    sourceCompatibility = JavaVersion.VERSION_16
}

application {
    mainClass.set("website.rioru.projects.rioru.RioruLauncherKt")
}

compileKotlin.kotlinOptions {
    freeCompilerArgs = listOf("-Xopt-in=kotlin.RequiresOptIn")
    jvmTarget = "1.8"
}
