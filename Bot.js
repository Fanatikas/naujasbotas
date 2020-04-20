const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";

client.on("message", message => {

if (message.content.startsWith(prefix + "dm")) {
if (!message.member.hasPermission("ADMINISTRATOR"))  return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` **Zinutes issiustos** `); 
 message.delete(); 
};     
});


client.on('ready',()=>{
    console.log(' Botas Ijungtas!');
    let statuses = [
        "  Bendriukas 24/7 ",
        "  Linezas#0011 ",
        "  BENDRIUKAS 24/7 " // U can add another
        
    ]
    setInterval(function(){
            let status = statuses[Math.floor(Math.random() * statuses.length)];
            client.user.setActivity(status, {type:"WATCHING"})
    
        }, 3000) //Seconds to Random



});

client.on ("message", (message) => {

    if (message.author.bot) return;

    if (message.content.startsWith ("Sveiki")) {
        message.reply ("Heyy!");
    }

});

client.on ("message", (message) => {

    if (message.author.bot) return;

    if (message.content.startsWith ("sveiki")) {
        message.reply ("Heyy!");
    }

});

client.on ("message", (message) => {

    if (message.author.bot) return;

    if (message.content.startsWith ("zdrf")) {
        message.reply ("Heyy!");
    }

});

client.on ("message", (message) => {

    if (message.author.bot) return;

    if (message.content.startsWith ("Zdrf")) {
        message.reply ("Heyy!");
    }

});

client.on ("message", (message) => {

    if (message.author.bot) return;

    if (message.content.startsWith ("Hey")) {
        message.reply ("Heyy!");
    }

});

client.on ("message", (message) => {

    if (message.author.bot) return;

    if (message.content.startsWith ("hey")) {
        message.reply ("Heyy!");
    }

});

client.on ("message", (message) => {

    if (message.author.bot) return;

    if (message.content.startsWith ("hai")) {
        message.reply ("Heyy!");
    }

});

client.on ("message", (message) => {

    if (message.author.bot) return;

    if (message.content.startsWith ("Hai")) {
        message.reply ("Heyy!");
    }

});


client.on('message', async message => {
  if (!message.guild) return;

  if (message.content === '/join') {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
    } else {
      message.reply('Jums reikia pirma prisijungt i kanala!');
    }
  }
});

client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // If the message content starts with "!kick"
    if (message.content.startsWith('!kick')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member
            .kick('Optional reason that will display in the audit logs')
            .then(() => {
              // We let the message author know we were able to kick the person
              message.reply(`Sekmingai Iskickinote ${user.tag}`);
            })
            .catch(err => {
              // An error happened
              // This is generally due to the bot not being able to kick the member,
              // either due to missing permissions or role hierarchy
              message.reply('Botas Neturi teises Iskickinti Sio nario.');
              // Log the error
              console.error(err);
            });
        } else {
          // The mentioned user isn't in this guild
          message.reply("That user isn't in this guild!");
        }
        // Otherwise, if no user was mentioned
      } else {
        message.reply("Jus nepataginot nario kuri norite iskickinti!");
      }
    }
  });
  
  client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // if the message content starts with "!ban"
    if (message.content.startsWith('!ban')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Ban the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           * Read more about what ban options there are over at
           * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
           */
          member
            .ban({
              reason: 'They were bad!',
            })
            .then(() => {
              // We let the message author know we were able to ban the person
              message.reply(`Sekmingai Uzbanintas ${user.tag}`);
            })
            .catch(err => {
              // An error happened
              // This is generally due to the bot not being able to ban the member,
              // either due to missing permissions or role hierarchy
              message.reply('Botas Neturi teises baninti sio nario.');
              // Log the error
              console.error(err);
            });
        } else {
          // Si komanda tik administracijai
          message.reply("That user isn't in this guild!");
        }
      } else {
        // Jus nepataginot Nario!
        message.reply("Jus nepataginot ka norite isbaninti!");
      }
    }
  });
  
//Naris Prisijungia Prie serverio!
client.on("guildMemberAdd", member => {
    member.send("Sveiki atvyke i **Bendriukas 24/7** Discord Serveri!")
})

//Help Komanda
client.on ("message", (message) => {

  if (message.author.bot) return;

  if (message.content.startsWith ("+Help")) {
      message.reply ("**Pagalba(komandos**)!");
  }

});

  client.login("Njk5MjM0MTc3NjEwMTU0MDQ0.Xp04OQ.yCkkftdyF_YGUyrZrKsqBiDs644");
