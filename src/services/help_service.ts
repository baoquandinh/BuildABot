import { LeagueService } from "./league_service";

export class HelpService implements IService {
  get helpMessage() {
    let services = [LeagueService];
    // services[0]
    return "";
  }
  buildMessage(): Promise<string> {
    return Promise.resolve(`\`\`\`Usage
    @BuildABot [command] [arguments]
    Commands
    [league, lol, leagueoflegends] Allows you to look up information for League of Legends
    \`\`\``);
  }
}
