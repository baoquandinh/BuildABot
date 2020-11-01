export class LeagueService implements IService {
  get helpMessage() {
    return `\`\`\`
League Service
@${this.botMention} league [command] [arguments]
@${this.botMention} lol [command] [arguments]

Commands
game    Will attempt to access information about a game.
me      Set information about the league account attached to your discord user.
  \`\`\``;
  }
  message: string = this.helpMessage;

  constructor(private botMention: string) {}

  buildMessage(): Promise<string> {
    return Promise.resolve(this.message);
  }

  processComponents(components: string[]) {
    if (components.length === 0) return;
    console.log(components);
    const command = components[0].trim().toLowerCase();
    switch (command) {
      case "game":
        this.message = `${command} - Looking for current game of user`;
        break;
      case "me":
        this.message = `${command} - Set information about the league account attached to your discord user.`;
        break;
    }
  }
  static canProcess(name: string): boolean {
    const validCommands = ["league", "leagueoflegends", "lol"];
    return validCommands.includes(name);
  }
}
