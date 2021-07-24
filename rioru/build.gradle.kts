val compileKotlin: org.jetbrains.kotlin.gradle.tasks.KotlinCompile by tasks

plugins {
    kotlin("jvm")
    application
}

dependencies {

    implementation(project(":utilities"))
    implementation(project(":database"))
    implementation("org.slf4j:slf4j-simple:1.7.30")
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
