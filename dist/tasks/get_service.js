"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadMessage = void 0;
const services_1 = require("../resources/enum/services");
exports.ReadMessage = (message) => {
    const discordService = {
        service: services_1.DiscordBotServices.Other,
        message: "",
    };
    // User accessing bot services
    if (message.startsWith("-")) {
        const newMessage = message.split("-");
        newMessage.shift();
        const botService = newMessage[0].trim();
        const botMessage = newMessage[1].trim();
        switch (botService.toLowerCase()) {
            //   case "help":
            //     discordService.service = DiscordBotServices.Help;
            //     discordService.message = "User needs help";
            //     return discordService;
            case "leagueoflegends":
            case "lol":
            case "league":
                discordService.service = services_1.DiscordBotServices.League;
                discordService.message = botMessage;
                return discordService;
            default:
                console.error("This service does not exist");
                return;
        }
    }
    // User accessing help documentation
    //   if (message.startsWith("--")) {
    //     discordService.service = DiscordBotServices.Help;
    //     discordService.message = message;
    //     return discordService;
    //   }
    // User asking bot non-service question
    discordService.message = message;
    return discordService;
};
