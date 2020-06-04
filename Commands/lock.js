const Discord = require('discord.js');

module.exports = {
    name: 'lock',
    description: 'Locks a channel!',
    execute(client, msg, args) {

        let error_p = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("ERROR")
            .setDescription("You need Permission MANAGE_MESSAGES!");


        if (!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.channel.send(error_p);

        msg.channel.bulkDelete(1);

        role = msg.guild.roles.everyone;

        msg.channel.overwritePermissions([
            {
                id: role,
                deny: ["SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
            },
        ], 'Lock');

        let lock_embed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setTitle("This Channel is now locked!");

        return msg.channel.send(lock_embed);
    }
};
