plugins {
    id("org.jetbrains.kotlin.jvm") version("1.5.20")
}

repositories {
    mavenCentral()
    google()
    maven(url = "https://jitpack.io")
}

dependencies {
    implementation(platform("org.jetbrains.kotlin:kotlin-bom"))
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    api("com.google.guava:guava:30.0-jre")
    implementation("org.json", "json", "20210307")
    // Eval
    api(kotlin("script-util"))
    api(kotlin("compiler"))
    api(kotlin("scripting-compiler"))
    api(kotlin("scripting-jsr223"))
}