const Discord = require('discord.js');

module.exports = {
    name: 'serverinfo',
    description: "Get info of a Guild!",
    execute(client, msg, args) {

        let server = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setThumbnail(msg.guild.iconURL)
            .setTitle(`Serverinfo | ${msg.guild.name}`)
            .addField("Owner:", `${msg.guild.owner.user.tag}`, true)
            .addField("ID:", `${msg.guild.id}`, true)
            .addField("Members:", `${msg.guild.memberCount}`, true)
            .addField("Highest Role", `${msg.guild.roles.highest}`, true)
            .addField("Created at:", `${msg.guild.createdAt.getUTCDay()}.${msg.guild.createdAt.getUTCMonth()}.${msg.guild.createdAt.getUTCFullYear()}`, true)
            .addField("Verification Level", `${msg.guild.verificationLevel}`, true)
            .addField("Region:", `${msg.guild.region}`, true)
            .addField("AFK Channel:",`${msg.guild.afkChannel}`, true)
            .addField("Name:", `${msg.guild.name}`, true);

        return msg.channel.send(server);
    }
};
