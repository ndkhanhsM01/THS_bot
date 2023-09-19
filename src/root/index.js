// require ....
require("dotenv").config();
const express = require("express");
const Discord = require("discord.js");
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Discord.Client({
    intents: [
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds
    ]
});

const botInteract = require("../interaction/bot_interaction.js");

// setup 
const app = express();

// bot listen
app.listen("3000", () => {
    console.log("bot is running");
});

// bot call back
client.on(Discord.Events.ClientReady, (bot) => {
    //bot.send("Im ready");
})

client.on(Discord.Events.MessageCreate, (msg) => {
    if (msg.content === "ping")
        msg.reply("Im here!!");
});

client.on(Discord.Events.InteractionCreate, (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    var commandName = interaction.commandName;

    botInteract.reply(interaction, commandName);
});

client.login(process.env.token);


/*
root
    ->src
        ->main
            -> index.js (require here)
        ->modules
            -> (module need to be required here)

*/

//const myModule = require("path here");