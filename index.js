const Discord = require("discord.js")
const client = new Discord.Client()
const chalk = require("chalk")
const fs = require("fs")

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} and ready to start logging and sending messages!`});
});

clinet.on('message', msg => {
  if(msg.channel.id === "") {
   const file = fs.readFileSync("/logs.txt", {encoding: "utf-8"})
   fs.appendFileSync("/logs.txt", `${msg}`, {encoding: "utf-8"})
    console.log(file)
  }
}

client.login(process.env.TOKEN)
