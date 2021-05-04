const Discord = require("discord.js")
const client = new Discord.Client()
const chalk = require("chalk")
const fs = require("fs")
const express = require('express')
const app = express()
const port = 3000

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} and ready to start logging and sending messages!`});
});

clinet.on('message', msg => {
  if(msg.channel.id === "752708745674621018") {
   const file = fs.readFileSync("/logs.txt", {encoding: "utf-8"})
   fs.appendFileSync("/logs.txt", `${msg}`, {encoding: "utf-8"})
    console.log(file)
  }
}

client.login(process.env.TOKEN)



app.get('/index.html', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
