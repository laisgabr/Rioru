plugins {
    id("org.jetbrains.kotlin.jvm") version "1.4.20"
    application
}

repositories {
    jcenter()
    mavenCentral()
    maven(url = "https://m2.dv8tion.net/releases") {
        name = "m2-dv8tion"
    }
    maven(url = "https://jitpack.io")
}

dependencies {
    implementation(platform("org.jetbrains.kotlin:kotlin-bom"))
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    implementation("com.google.guava:guava:29.0-jre")

    implementation("net.dv8tion:JDA:4.2.1_255")
    implementation("com.github.ShadowB64:UsagiAPISimple:7724995560")

}

application {
    mainClass.set("com.github.shadowb64.rioru.RioruLauncherKt")
}

java {
    sourceCompatibility = JavaVersion.VERSION_15
}