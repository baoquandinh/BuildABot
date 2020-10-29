"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpService = void 0;
const league_service_1 = require("./league_service");
class HelpService {
    get helpMessage() {
        let services = [league_service_1.LeagueService];
        // services[0]
        return "";
    }
    buildMessage() {
        return Promise.resolve(`That service may not exist, here are the possible services I have:
        League
        --------
        -league
        -lol
        -leagueoflegends`);
    }
}
exports.HelpService = HelpService;
