const {request} = require("undici");

const url = "http://www.apitemperture.somee.com/";

module.exports = {
    reply : (interaction, command) => rep(interaction, command),
}

async function rep(interaction, command){

    switch(command){
        case "hey":
            hey(interaction);
            break;
        case "showme":
            await interaction.reply('Wait a second.. 🔭');
            var result = await showme(interaction);
            if(result)
                await interaction.editReply(result);
            else
                await interaction.editReply("Can not reach to result 😔");
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
    const sensor_id = interaction.options.get("sensor_id")?.value;
    const typeRequire = interaction.options.get("value_require")?.value;

    const res = await request(`${url}api/Temperture/GetSingleTempertureById?id=${sensor_id}`);
    const { info } = await res.body.json();

    var result = info.title;

    return result;
}

async function firstRequest(interaction){
    //await interaction.deferReply();

    const catResult = await request('https://api.publicapis.org/entries');
    const { count } = await catResult.body.json();
    console.log(`log ${count}`);
    interaction.reply(`Has ${count}`);
}