"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dispatcher = void 0;
const help_service_1 = require("../services/help_service");
const league_service_1 = require("../services/league_service");
exports.Dispatcher = (originalMessage) => {
    // User accessing bot services
    if (originalMessage.startsWith("-")) {
        let service;
        const newMessage = originalMessage.split(" ");
        if (newMessage.length == 1)
            return Promise.resolve("You didn't give me enough information");
        const botService = newMessage[0].trim().replace("-", "").toLowerCase();
        console.log(botService);
        // const botMessage = newMessage[1].trim();
        switch (true) {
            case league_service_1.LeagueService.canProcess(botService):
                service = new league_service_1.LeagueService();
                service.helpMessage;
                break;
            default:
                service = new help_service_1.HelpService();
                service.helpMessage;
                break;
        }
        return service.buildMessage();
    }
    return Promise.resolve(`Sorry, I don't know what you mean by that.`);
};
