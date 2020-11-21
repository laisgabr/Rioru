module.exports = {
    Command: require('./Structures/Util/Command'),

    Listener: require('./Structures/Util/Listener'),
    
    i18: require('./Structures/i18n/t'),
    
    Mongoose: require('./Database/Mongoose'),
    
    ZoeEmojis: require('./Structures/ZoeEmojis'),

    ZoeManager: require('./Music/ZoeManager'),

    ZoePlayer: require('./Music/ZoePlayer'),

    SetServerLocale: require('./Structures/i18n/SetServerLocale')
}