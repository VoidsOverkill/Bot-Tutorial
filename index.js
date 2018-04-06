const Discord = require("discord.js");
const client = new Discord.Client();


let prefix = "!";
client.on("message", (message) => {
if (message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

if (command === 'ping') {
message.channel.send(`Pong \`${Date.now() - message.createdTimestamp}MS\``);
}

if (command === 'help') {
const ping = args.join("-commands");
const embed = new Discord.RichEmbed()
.addField('My Commands', 'Here Are All My Commands')
.addField('Information', `Ping - Measures Bot Latency\n\nHelp - Sends This Help Message`)
.setColor('RANDOM')
message.channel.send({embed});
}


});

client.login("SuperSecretBotTokenHere");
