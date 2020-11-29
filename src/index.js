module.exports = {
    AntiLinks: require('./Structures/System/AntiLinks'),

    Command: require('./Structures/Util/Command'),

    Listener: require('./Structures/Util/Listener'),
    
    i18: require('./Structures/i18n/t'),
    
    Mongoose: require('./Database/Mongoose'),
    
    ZoeEmojis: require('./Structures/ZoeEmojis'),

    ZoeManager: require('./Music/ZoeManager'),

    ZoePlayer: require('./Music/ZoePlayer'),

    ZoeUtils: require('./Structures/Util/ZoeUtils'),

    ZoeEmbedBuilder: require('./Structures/Util/ZoeEmbedBuilder'),

    SetServerLocale: require('./Structures/i18n/SetServerLocale'),




    Utils: require('./Structures/Command/Utils/Utils')

    CommandContext: require('./Structures/Command/CommandContext'),

    CommandRunner: require('./Structures/Command/CommandRunner'),

    CommandOptions: require('./Structures/Command/CommandsOptions'),

    BlacklistChecker: require('./Structures/Command/Utils/BlacklistChecker')
}