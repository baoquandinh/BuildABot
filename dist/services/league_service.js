"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueService = void 0;
class LeagueService {
    get helpMessage() {
        return "Let me out";
    }
    buildMessage() {
        return Promise.resolve("Looking up something in league");
    }
    static canProcess(name) {
        const validCommands = ["league", "leagueoflegends", "lol"];
        return validCommands.includes(name);
    }
    getSummoner(username) {
        return username;
    }
}
exports.LeagueService = LeagueService;
