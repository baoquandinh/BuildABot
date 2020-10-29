"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const auth_json_1 = __importDefault(require("./auth.json"));
const get_discord_service_1 = require("./tasks/get_discord_service");
const run = async (args) => {
    const client = new discord_js_1.default.Client();
    await client.login(args.token);
    if (!client.user)
        throw Error("There was an issue getting Client User");
    const botUser = client.user;
    console.log(botUser);
    client.on("ready", () => {
        console.log(`Logged in as ${botUser.username}`);
    });
    client.on("message", async (message) => {
        const botWasMention = message.mentions.users.find((u) => u.id == botUser.id);
        if (botWasMention && !message.author.bot) {
            let messageContent = message.content.split(' ');
            messageContent.shift();
            const newMessage = messageContent.join(' ');
            const service = await get_discord_service_1.Dispatcher(newMessage);
            if (!service)
                return;
            message.reply(service);
        }
    });
};
module.exports = {
    run: run(auth_json_1.default),
};
