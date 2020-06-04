const Discord = require('discord.js');

module.exports = {
    name: "nick",
    description: "Change your Nickname!",
    execute(client, msg, args) {

        let nickname = args.slice(1).join(' ');

        let error_p = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("ERROR")
            .setDescription("You need Permission MANAGE_NICKNAMES!");

        let error_n = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("ERROR")
            .setDescription("Please provide a Nickname!");

        if (!msg.member.hasPermission('MANAGE_NICKNAMES')) return msg.channel.send(error_p);
        if (!nickname) return msg.channel.send(error_n);

        msg.member.setNickname(nickname)
            .catch(e => {
                console.log(`Can't rename ${msg.author.id} Permission Error 202`)
                return msg.channel.send(`:x: Can't rename you, make sure that the Bot has the Permission.`)
            })

        let nickname_embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Changed Nickname")
            .setDescription(`<@${msg.author.id}> new Nickname is ${nickname}`);

        return msg.channel.send(nickname_embed);

    }
};
