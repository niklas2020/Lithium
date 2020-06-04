const Discord = require('discord.js');

module.exports = {
    name: 'announce',
    description: 'announce users!',
    execute(client, msg, args) {

        let mess = args.slice(1).join(' ');

        let error_p = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("ERROR")
            .setDescription("You need the Permission MANAGE_MESSAGES!");

        let error_m = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("ERROR")
            .setDescription("Please provide a message!");

        if (!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.channel.send(error_p);
        if (!mess) return msg.channel.send(error_m);

        msg.channel.bulkDelete(1);

        let announce_embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Announce")
            .setDescription(`${mess}`)

        return msg.channel.send(announce_embed);
    }
};
