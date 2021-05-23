plugins {
    id("com.riorucorp.projects.rioru.kotlin-application-conventions")
}

dependencies {
    implementation(project(":rioru-utilities"))
}

application {
    mainClass.set("com.riorucorp.projects.rioru.RioruLauncherKt")
}
