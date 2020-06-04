const Discord = require('discord.js');

module.exports = {
    name: 'info',
    description: 'Sends random color!',
    execute(client, msg, args) {

        let embed = new Discord.MessageEmbed()
            .setColor("#5C9EAD")
            .setTitle("Important Info's")
            .addField("Library:", "Discord.JS")
            .addField("Web:", "https://lithiumbot.wtf/")
            .addField("Support:", "https://discord.gg/CxfhTDY")
            .addField("Ping:", `${client.ws.ping}`);

        return msg.channel.send(embed);
    }
};
