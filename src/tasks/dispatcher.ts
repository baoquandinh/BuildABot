import { HelpService } from "../services/help_service";
import { LeagueService } from "../services/league_service";

export const Dispatcher = (originalMessage: string): Promise<string> => {
  // User accessing bot services
  if (originalMessage.startsWith(".")) {
    let service: IService;

    const newMessage = originalMessage.split(" ");
    if (newMessage.length == 1)
      return Promise.resolve("You didn't give me enough information");
    const botService = newMessage[0].trim().replace(".", "").toLowerCase();
    console.log(botService);
    switch (true) {
      case LeagueService.canProcess(botService):
        service = new LeagueService();
        service.helpMessage;
        break;
      default:
        service = new HelpService();
        service.helpMessage;
        break;
    }
    return service.buildMessage();
  }
  return Promise.resolve(`Sorry, I don't know what you mean by that.`);
};
