const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: "Kick an User!",
    execute: function (client, msg, args) {

        let target = msg.guild.member(msg.mentions.users.first());
        let reason = args.slice(2).join(' ');

        let error_p = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("ERROR")
            .setDescription("You need Permission KICK_MEMBERS!");

        let error_t = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("ERROR")
            .setDescription("Please provide a User");

        let error_r = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("ERROR")
            .setDescription("Please provide a reason!");

        if (!msg.member.hasPermission('KICK_MEMBERS')) return msg.channel.send(error_p);
        if (!target) return msg.channel.send(error_t);
        if (!reason) return msg.channel.send(error_r);
        target.kick(reason)
            .catch(e => {
                console.log(`Can't kick ${target.user.id} Permission Error 202!`)
            })

        let kick_embed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setTitle(`Kick | ${target.user.username} | ${target.user.id} `)
            .setDescription(`<@${target.user.id}> has been Kicked!`)
            .addField("Reason:", `${reason}`, true)
            .addField("Moderator:", `${msg.author}`, true);

        return msg.channel.send(kick_embed);

    }
};
