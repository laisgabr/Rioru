plugins {
    id("com.riorucorp.projects.rioru.kotlin-common-conventions")
}

dependencies {
    implementation(project(":rioru-utilities"))
    implementation("com.mercadopago", "sdk-java", "1.9.1")
    implementation("com.stripe", "stripe-java", "20.50.0")
    implementation("com.github.paypal", "Checkout-Java-SDK", "1.0.3")
}