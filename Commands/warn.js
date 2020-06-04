const Discord = require('discord.js');

module.exports = {
    name: 'warn',
    description: "warn a user!",
    execute(client, msg, args) {

        let target = msg.guild.member(msg.mentions.users.first());
        let reason = args.slice(2).join(' ');

        let error_p = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("ERROR")
            .setDescription("You need Permission KICK_MEMBERS");

        let error_t = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("ERROR")
            .setDescription("Please provide an User");

        let error_r = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("ERROR")
            .setDescription("Please provide a reason!");

        if (!msg.member.hasPermission('KICK_MEMBERS')) return msg.channel.send(error_p);
        if (!target) return msg.channel.send(error_t);
        if (!reason) return msg.channel.send(error_r);

        let warn_embed = new Discord.MessageEmbed()
            .setColor("YELLOW")
            .setTitle(`Warn | ${target.user.username} | ${target.user.id} `)
            .setDescription(`<@${target.user.id}> has been warned!`)
            .addField("Reason:", `${reason}`, true)
            .addField("Moderator:", `${msg.author}`, true);

        return msg.channel.send(warn_embed);
    }
};
