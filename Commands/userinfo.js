const Discord = require('discord.js');

module.exports = {
    name: 'userinfo',
    description: "Get info of a user!",
    execute(client, msg, args) {

        let target = msg.guild.member(msg.mentions.users.first());

        let error_t = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(":x: ERROR")
            .setDescription("Please provide an User");

        if (!target) return msg.channel.send(error_t);


        let user_embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setThumbnail(target.user.displayAvatarURL())
            .setTitle(`Userinfo | ${target.user.username} | ${target.user.id} `)
            .addField("Created at:", `${target.user.createdAt.getDay()}.${target.user.createdAt.getMonth()}.${target.user.createdAt.getUTCFullYear()}`, true)
            .addField("TAG:", `${target.user.discriminator}`, true)
            .addField("ID:", `${target.user.id}`, true)
            .addField("Nick:", `${target.nickname}`, true)
            .addField("Game:", `__${target.presence.activities}__`, true)
            .addField("Status", `${target.presence.status}`, true);

        return msg.channel.send(user_embed);
    }
};
