plugins {
    kotlin("jvm")
    `java-library`
}

dependencies {
    implementation("org.mongodb", "mongodb-driver-sync", properties["mongo.version"] as String)
    implementation(project(":utilities"))
}