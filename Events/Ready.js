const config = require('../config.json')

module.exports = {
    execute(client) {
        client.on('ready', () => {
            console.log(`Connected as ${client.user.tag}`)
            client.user.setActivity(`${config.PREFIX}help | ${client.guilds.cache.size} Servers`, {
                type: "WATCHING"
            });
        })
    }
}
