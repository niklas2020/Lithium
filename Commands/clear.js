const Discord = require('discord.js');

module.exports = {
    name: 'clear',
    description: "Delete messages!",
    execute(client, msg, args) {

        let number = args.slice(1).join(' ');

        let error_p = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("ERROR")
            .setDescription("You need Permission MANAGE_MESSAGES!");

        let error_t = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("ERROR")
            .setDescription("Please provide a number!");

        if (!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.channel.send(error_p);
        if (!number) return msg.channel.send(error_t);

        msg.channel.bulkDelete(number)
            .catch(e => {
                console.log(`Cant delete ${number}`)
                return msg.channel.send(`:x: Can't delete ${number}`)
            })

        let clear_embed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setTitle(`Clear | ${msg.author.username} `)
            .setDescription(`${number} messages deleted!`)
            .addField("Number:", `${number}`, true)
            .addField("Moderator:", `${msg.author}`, true);

        return msg.channel.send(clear_embed);
    }
};
