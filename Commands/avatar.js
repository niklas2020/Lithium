const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Sends your Avatar',
    execute(client, msg, args) {

        let user = msg.guild.member(msg.mentions.users.first());


        let error_c = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("ERROR")
            .setDescription("Please provide an User!");

        if (!user) return msg.channel.send(error_c);

        let announce_embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Avatar request!")
            .setThumbnail(user.user.displayAvatarURL())
            .setDescription(`Avatar of <@${user.id}>`)

        return msg.channel.send(announce_embed);
    }
};
