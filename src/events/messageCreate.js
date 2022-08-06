//burasının ne olduğunu bilmiyorsanız lütfen hiç bir koda dokunmayın.

const conf = require("./../Config/settings.json");
module.exports = {
  name: "messageCreate",
  async execute(message, client) {
    if (message.author.bot) return;
    if (!message.content.startsWith(conf.prefix)) return;
    let command = message.content.split(" ")[0].slice(conf.prefix.length);
    let args = message.content.split(" ").slice(1);
    let cmd = client.commands.get(command)
    if (!cmd) return;
      cmd.execute(client, message, args);
  },
};
