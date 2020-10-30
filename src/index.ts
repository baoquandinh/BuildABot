import discord, { TextBasedChannel, TextChannel } from "discord.js";
import auth from "./auth.json";
import { IArgs } from "./resources/models/args";
import { Dispatcher } from "./tasks/dispatcher";

const run = async (args: IArgs) => {
  const client = new discord.Client();
  await client.login(args.token);
  if (!client.user) throw Error("There was an issue getting Client User");
  const botUser = client.user;
  console.log(botUser);
  client.on("ready", () => {
    console.log(`Logged in as ${botUser.username}`);
  });

  client.on("message", async (message) => {
    const botWasMention = message.mentions.users.find(
      (u) => u.id == botUser.id
    );
    if (botWasMention && !message.author.bot) {
      let messageContent = message.content.split(' ');
      messageContent.shift()
      const service = await Dispatcher(messageContent);
      if (!service) return;
      message.reply(service)
    }
  });
};

module.exports = {
  run: run(auth),
};
