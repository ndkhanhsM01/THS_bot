const {request} = require("undici");


module.exports = {
    reply : (interaction, command) => rep(interaction, command),
}

function rep(interaction, command){

    switch(command){
        case "hey":
            hey(interaction);
            break;
        case "showme":
            showme(interaction);
            //firstRequest(interaction);
            break;
        default:
            console.log(`"${command}" command not found`);
            break;
    }
}

function hey(interaction){
    interaction.reply("hey boy");
}

async function showme(interaction){
    // const res = await request('https://api.publicapis.org/entries');
    // const { count } = await res.body.json();
    // console.log(`log ${count}`);
    // interaction.reply(`Has ${count}`);

    const sensor_id = interaction.options.get("sensor_id")?.value;
    const typeRequire = interaction.options.get("value_require")?.value;

    interaction.reply(`you require ${typeRequire} from sensor has id: ${sensor_id}`);
}

async function firstRequest(interaction){
    //await interaction.deferReply();

    const catResult = await request('https://api.publicapis.org/entries');
    const { count } = await catResult.body.json();
    console.log(`log ${count}`);
    interaction.reply(`Has ${count}`);
}