const { Client } = require('discord.js')
const config = require('./config.json')
const command = require('./Events/Commandloader')
const ready = require('./Events/Ready')

const client = new Client();

ready.execute(client)
command.execute(client)

client.on('message', message => {
    if (!message.content.startsWith(config.PREFIX) || message.author.bot) return;

    const args = message.content.slice(config.PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'stats') {
        return message.channel.send(`Server count: ${client.guilds.cache.size}`);
    }
});


client.login(config.TOKEN)
    .catch(e => {
        console.log(e)
    })
