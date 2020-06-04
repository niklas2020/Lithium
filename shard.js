const { ShardingManager } = require('discord.js');
const config = require('./config.json');
const manager = new ShardingManager('./bot.js', {
    totalShards: 'auto',
    token: `${config.TOKEN}`
    });

manager.spawn();
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
