const Discord = require('discord.js');
const bot = new Discord.Client();
const RichEmbed = new Discord.RichEmbed();
var fs = require('fs');

// -->COMMANDS<--

bot.on('guildMemberAdd',member =>{
    member.send('**Seni __SimbaFroz__ Krallığına Davet Ediyorum Gelirmisin.** https://discord.gg/p5PSTYC  https://discord.gg/KRJDE3H');

    //member.guild.defaultChannel.sendmessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);

});


bot.on('guildMemberRemove', member=>{
     member.send('**Seni __SimbaFroz__ Krallığına Davet Ediyorum Gelirmisin.** https://discord.gg/p5PSTYC  https://discord.gg/KRJDE3H');

    //member.guild.defaultChannel.sendmessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);
  
});



bot.on('ready',()=> {
console.log('Recep Fides');

});

bot.login(process.env.BOT_TOKEN);
