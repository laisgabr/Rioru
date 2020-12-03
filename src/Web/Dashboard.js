module.exports = class Dashboard {
    constructor(client, msg) {
        this.client = client;
        this.msg = msg;

        const express = require('express')
        const app = express()
        
        app.get('/', (req, res) => {
            res.sendStatus(404)
        })
    }
}