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
  constructor(private botMention: string) {}

  buildMessage(components: string[]): Promise<string> {
    let message = this.helpMessage;
    if (components.length === 0) return Promise.resolve(message);
    console.log(components);
    const command = components[1].trim().toLowerCase();
    switch (command) {
      case "game":
        message = `${command} - Looking for current game of user`;
        break;
      case "me":
        message = `${command} - Set information about the league account attached to your discord user.`;
        break;
    }
    return Promise.resolve(message);
  }

  static canProcess(name: string): boolean {
    const validCommands = ["league", "leagueoflegends", "lol"];
    return validCommands.includes(name);
  }
}
