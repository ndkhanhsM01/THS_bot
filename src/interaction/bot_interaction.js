
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
            break;
        default:
            console.log(`"${command}" command not found`);
            break;
    }
}

function hey(interaction){
    interaction.reply("hey boy");
}

function showme(interaction){
    console.log(interaction.content);
}