export class LeagueService implements IService {
  get helpMessage() {
    return "Let me out";
  }
  buildMessage(): Promise<string> {
    return Promise.resolve("Looking up something in league");
  }
  static canProcess(name: string): boolean {
    const validCommands = ["league", "leagueoflegends", "lol"];
    return validCommands.includes(name);
  }
  public getSummoner(username: string) {
    return username;
  }
}
