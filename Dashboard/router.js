module.exports = async(app) => {
    app.use('/', require('./routes/index'));

    app.use('/authorize', require('./routes/discord'));
}