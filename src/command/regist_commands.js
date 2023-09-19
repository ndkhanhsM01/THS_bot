/*
    this file to regist new command for "THS_bot"
    type: [node .\src\command\regist_commands.js] to regist new commands
*/

require("dotenv").config();

const RequireType = {
    BOTH: "BOTH",
    TEMPURATURE: "TEMPURATURE",
    HUMIDITY: "HUMIDITY",
}

const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");
const commands = [
    //-----------------------------------------------
    {
        name: "hey",
        description: "What do you want ?",
    },
    /*
    -----------------------------------------------
    */
    {
        name: "showme",
        description: "get the tempurature and the humidity of the sensor",
        options:[
            {
                name: "value_require",
                description: "choose value you require",
                type: ApplicationCommandOptionType.String,
                required: true,
                choices:[
                    {name: RequireType.BOTH         , value: RequireType.BOTH       , description: "both tempurature & humidity"},
                    {name: RequireType.TEMPURATURE  , value: RequireType.TEMPURATURE,   emoji: "🌡️"},
                    {name: RequireType.HUMIDITY     , value: RequireType.HUMIDITY,      emoji: "💧"},
                ]
            },
            {
                name: "sensor_id",
                description: "type your sensor's ID",
                type: ApplicationCommandOptionType.Number,
                required: true,
            }
        ]
    },
    /*
    -----------------------------------------------
    */
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