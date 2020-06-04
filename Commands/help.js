const Discord = require('discord.js')
const config = require('../config.json')

module.exports = {
    name: 'help',
    description: 'help command',
    execute(client, msg, args) {

        let mod_embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(":scales: Moderation")
            .setDescription(`Moderator \n Prefix: ${config.PREFIX}`)
            .addField("warn", "warn (user) (reason)", true)
            .addField("kick", "kick (user) (reason)", true)
            .addField("ban", "ban (user) (reason)", true)
            .addField("clear", "clear (int:number)", true);

        msg.channel.send(mod_embed);

        let manager_embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(":gear: Manager Core")
            .addField("announce", "announce (message)", true)
            .addField("nick", "nick (username)", true)
            .addField("purge", "purge (int:number)", true)
            .addField("lock","lock (channel)", true)
            .addField("unlock","unlock (channel)",true)

        msg.channel.send(manager_embed);

        let misc_embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(":tada: Fun")
            .addField("avatar","avatar (user)",true)
            .addField("userinfo","userinfo (user)",true)
            .addField("serverinfo","severinfo",true)
            .addField("covid", "covid (country)",true)
            .addField("crypto", "crypto (currency)", true);

        msg.channel.send(misc_embed);

        let info_embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(":tools: Infos")
            .addField("info", "info")
            .addField("Invite", "https://lithiumbot.wtf/invite")

        msg.channel.send(info_embed)
    }
}
