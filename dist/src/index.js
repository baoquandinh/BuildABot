"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const auth_json_1 = __importDefault(require("./auth.json"));
const run = async (args) => {
    const client = new discord_js_1.default.Client();
    await client.login(args.token);
    if (!client.user)
        throw Error("There was an issue getting Client User");
    const botUser = client.user;
    console.log(botUser);
    //   const TextBasedChannel = new discord.TextChannel()
    client.on("ready", () => {
        console.log(`Logged in as ${botUser.username}`);
    });
    client.on("message", async (message) => {
        const botWasMention = message.mentions.users.find((u) => u.id == botUser.id);
        if (botWasMention) {
            await message.channel.startTyping(10);
            await message.channel.send("Test");
            const messageContent = message.content;
            // const channel = client.channels.cache.get(message.channel.id)
            // if (channel && channel.isText && channel.type) {
            //    const textChannel = channel as TextChannel
            //    textChannel.send('Hi');
            // }
        }
        // const prefix = botUser.username;
        // if (message.author.bot) return;
        // if (!messageContent.startsWith(prefix)) return;
        // const messageForBot = messageContent.split(prefix)[1].trim();
        // const service = GetDiscordService(messageForBot);
        // if (!service)
        //   throw Error("Looks like we ran into an error getting services");
        // await ProcessDiscordService({ service });
    });
};
module.exports = {
    run: run(auth_json_1.default),
};
