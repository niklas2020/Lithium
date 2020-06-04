const Discord = require('discord.js');

module.exports = {
    name: 'ban',
    description: "Ban a user!",
    execute: function (client, msg, args) {

        let target = msg.guild.member(msg.mentions.users.first());
        let reason = args.slice(2).join(' ');

        let error_p = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("ERROR")
            .setDescription("You need the Permission BAN_MEMBERS!");

        let error_t = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("ERROR")
            .setDescription("Please provide an User");

        let error_r = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("ERROR")
            .setDescription("Please provide a reason!");

        if (!msg.member.hasPermission('BAN_MEMBERS')) return msg.channel.send(error_p);
        if (!target) return msg.channel.send(error_t);
        if (!reason) return msg.channel.send(error_r);
        target.ban({reason: reason})
            .catch(e => {
                console.log(`[ERR] Can't ban ${target.user.id} Permission Error 202`)
            })

        let ban_embed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setTitle(`Ban | ${target.user.username} | ${target.user.id} `)
            .setDescription(`<@${target.user.id}> has been Banned!`)
            .addField("Reason:", `${reason}`, true)
            .addField("Moderator:", `${msg.author}`, true);

        return msg.channel.send(ban_embed);

    }
};
