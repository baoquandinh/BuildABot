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
    const body = message.content;
    console.log(body)
    if (body.startsWith(`<@!${botUser.id}>`) && !message.author.bot) {
      let components = body.split(" ");
      components[0] = botUser.username
      const service = await Dispatcher(components);
      if (!service) return;
      message.reply(service);
    }
  });
};

module.exports = {
  run: run(auth),
};
