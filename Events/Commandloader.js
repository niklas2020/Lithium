const config = require('../config.json')
const Discord = require('discord.js')
const fs = require('fs')
let prefix = config.PREFIX

module.exports = {
    name: 'Commandloader',
    execute(client) {

        console.log('Launched Commandloader')

        client.commands = new Discord.Collection();

        const commandfiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));
        for (const file of commandfiles) {
            const command = require(`../Commands/${file}`);

            client.commands.set(command.name, command)
        }

        client.on('message', msg => {

            let args = msg.content.substring(config.PREFIX.length).split(" ");

            if (msg.author.bot) {
                return true
            } else if (msg.content.startsWith(`${prefix}test`)) {
                msg.channel.send('Test')
            } else if (msg.content.startsWith(`${prefix}userinfo`)) {
                client.commands.get('userinfo').execute(client, msg, args)
            } else if (msg.content.startsWith(`${prefix}announce`)) {
                client.commands.get('announce').execute(client, msg, args)
            } else if (msg.content.startsWith(`${prefix}avatar`)) {
                client.commands.get('avatar').execute(client, msg, args)
            } else if (msg.content.startsWith(`${prefix}ban`)) {
                client.commands.get('ban').execute(client, msg, args)
            } else if (msg.content.startsWith(`${prefix}covid`)) {
                client.commands.get('covid').execute(client, msg, args)
            } else if (msg.content.startsWith(`${prefix}crypto`)) {
                client.commands.get('crypto').execute(client, msg, args)
            } else if (msg.content.startsWith(`${prefix}info`)) {
                client.commands.get('info').execute(client, msg, args)
            } else if (msg.content.startsWith(`${prefix}kick`)) {
                client.commands.get('kick').execute(client, msg, args)
            } else if (msg.content.startsWith(`${prefix}lock`)) {
                client.commands.get('lock').execute(client, msg, args)
            } else if (msg.content.startsWith(`${prefix}clear`)) {
                client.commands.get('clear').execute(client, msg, args)
            } else if (msg.content.startsWith(`${prefix}clear`)) {
                client.commands.get('clear').execute(client, msg, args)
            } else if (msg.content.startsWith(`${prefix}serverinfo`)) {
                client.commands.get('serverinfo').execute(client, msg, args)
            } else if (msg.content.startsWith(`${prefix}nick`)) {
                client.commands.get('nick').execute(client, msg, args)
            } else if (msg.content.startsWith(`${prefix}unlock`)) {
                client.commands.get('unlock').execute(client, msg, args)
            } else if (msg.content.startsWith(`${prefix}warn`)) {
                client.commands.get('warn').execute(client, msg, args)
            } else if (msg.content.startsWith(`${prefix}help`)) {
                client.commands.get('help').execute(client, msg, args)
            }
        })
    }
}
