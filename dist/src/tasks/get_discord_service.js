"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDiscordService = void 0;
const services_1 = require("../resources/enum/services");
exports.GetDiscordService = (message) => {
    const discordService = {
        name: services_1.DiscordBotServices.Other,
        message: "",
    };
    // User accessing bot services
    if (message.startsWith("-")) {
        const newMessage = message.split("-");
        newMessage.shift();
        const botService = newMessage[0].trim();
        const botMessage = newMessage[1].trim();
        switch (botService.toLowerCase()) {
            case "leagueoflegends":
            case "lol":
            case "league":
                discordService.name = services_1.DiscordBotServices.League;
                discordService.message = botMessage;
                return discordService;
            default:
                console.error("This service does not exist");
                return;
        }
    }
    // User asking bot non-service question
    discordService.message = message;
    return discordService;
};
