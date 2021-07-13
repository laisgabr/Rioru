plugins {
    kotlin("jvm")
    `java-library`
}

repositories {
    mavenCentral()
}

dependencies {
    implementation(platform(kotlin("bom")))
    implementation(kotlin("stdlib-jdk8"))
    api("com.google.guava:guava:30.0-jre")
    api(kotlin("script-util"))
    api(kotlin("compiler"))
    api(kotlin("scripting-compiler"))
    api(kotlin("scripting-jsr223"))
    implementation("dev.kord:kord-core:0.7.3")
    implementation("org.json", "json", "20210307")
}