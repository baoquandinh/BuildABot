import { LeagueService } from "./league_service";

export class HelpService implements IService {
  get helpMessage() {
    // There should be NO indents on the lines with the back ticks
    return `\`\`\`
Usage
  @${this.botMention} [command] [arguments]
Commands
  [league, lol, leagueoflegends] Allows you to look up information for League of Legends
\`\`\``;
  }

  constructor(private botMention: string) {}

  buildMessage(): Promise<string> {
    return Promise.resolve(this.helpMessage);
  }
}
