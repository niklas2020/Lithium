const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'covid',
    description: 'Send Covid Stats!',
    execute(client, msg, args) {

        let covid = args.slice(1).join(' ');

        let error_c = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("ERROR")
            .setDescription("Please provide a country!");


        if (!covid) return msg.channel.send(error_c);

        fetch(`https://corona.lmao.ninja/v2/countries/${covid}`)
            .then(res => res.json())
            .then(data => {
                let country = data.country;
                let confirmed = data.cases;
                let today = data.todayCases;
                let deaths = data.deaths;
                let critical = data.critical;
                let continent = data.continent;

                let covid_embed = new Discord.MessageEmbed()
                    .setColor("#ff0000")
                    .setTitle(`Covid Stats | ${country}`)
                    .addField("Country:", `${country}`, true)
                    .addField("Confirmed:", `${confirmed}`, true)
                    .addField("Today:", `${today}`, true)
                    .addField("Deaths:", `${deaths}`, true)
                    .addField("Critical", `${critical}`, true)
                    .addField("Continent:", `${continent}`, true);

                msg.channel.send(covid_embed);
            })
    }
};
