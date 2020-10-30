import { HelpService } from "../services/help_service";
import { LeagueService } from "../services/league_service";

export const Dispatcher = (message: string[]): Promise<string> => {
  // User accessing bot services
  let service = new HelpService();
  if (message.length === 0) return service.buildMessage();

  const botService = message[0].trim().toLowerCase();
  console.log(botService);
  switch (true) {
    case LeagueService.canProcess(botService):
      service = new LeagueService();
      service.helpMessage;
      break;
    default:
      // service = new HelpService();
      // service.helpMessage;
      break;
  }
  return service.buildMessage();
};
