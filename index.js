const Discord = require('discord.js');
const Equation = require('equations').default;
const {Client, Intents} = require('discord.js');

const client = new Discord.Client({
  intents: [Intents.FLAGS.GUILD_MESSAGES]
}
);

client.login("Nzk2ODk4MTk5NTg2NDcxOTY4.X_enSA.Ul1hnriyTHYaDisWRc7BiJH2FE8");
client.on('ready', async () => {
  console.log(`logged in!`);
});

client.on('messageCreate', (message) => {
  console.log('message recieved');
  message.content = message.content.trim(); // remove extra whitespace
  const flag = '!solve ';
  if (message.content.startsWith(flag)) {
       console.log('flag seen');
      const toSolve = message.content.slice(flag.length, message.content.length);
      try {
          const solved = Equation.solve(toSolve);

          message.reply(`${toSolve} = ${solved}`); // backticks (TLs) are used to embed variables in strings like `${var}`
      } catch (err) {
          message.reply(`Could not solve the equation '${toSolve}'.`);
      }
  }
});


/*client.on('messageCreate', (msg) => 
{
  if(msg.content)
})
*/