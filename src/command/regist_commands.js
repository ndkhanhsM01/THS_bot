/*
    this file to regist new command for "THS_bot"
    type: [node .\src\command\regist_commands.js] to regist new commands
*/

require("dotenv").config();

const { REST, Routes } = require("discord.js");
const commands = [
    {
        name: "hey",
        description: "What do you want ?",
    },
    {
        name: "showme",
        description: "get the tempurature and the humidity of the sensor",
    }
];

const tilte_regist = "[REGIST]";
const tilte_err = "[ERROR]";
const rest = new REST({ version: "10" }).setToken(process.env.token);
(async () => {
    try {
        console.log(`${tilte_regist}: in progress...`);
        await rest.put(
            Routes.applicationCommands(process.env.client_id)
            , { body: commands }
        )
        console.log(`${tilte_regist}: done!`);
    } catch (error) {
        console.log(`${tilte_err}: ${error}`);
    }
})();