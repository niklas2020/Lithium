const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'crypto',
    description: 'Send price of a idk!',
    execute(client, msg, args) {

        let crypto = args.slice(1).join(' ');

        let error_c = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("ERROR")
            .setDescription("Please provide a Crypto currency!");

        if (!crypto) return msg.channel.send(error_c);

        fetch(`https://www.bitstamp.net/api/v2/ticker/${crypto}eur/`)
            .then(res => res.json())
            .then(data => {
                let price = data.last;
                let high = data.high;
                let low = data.low;

                let crypto_embed = new Discord.MessageEmbed()
                    .setColor("#326273")
                    .setTitle("Crypto!")
                    .setDescription(`Crypto: ${crypto}`)
                    .addField("Price: ", `${price}€`, true)
                    .addField("Highest (Week): ", `${high}€`, true)
                    .addField("Lowest (Week): ", `${low}€`, true);

                msg.channel.send(crypto_embed);
            })
    }
};
