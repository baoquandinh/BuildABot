import { LeagueService } from "./league_service";

export class HelpService implements IService {
  get helpMessage() {
    let services = [LeagueService];
    // services[0]
    return "";
  }
  buildMessage(): Promise<string> {
    return Promise.resolve(`That service may not exist, here are the possible services I have:
        League
        --------
        -league
        -lol
        -leagueoflegends`);
  }
}
