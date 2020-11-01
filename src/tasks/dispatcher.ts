import { HelpService } from "../services/help_service";
import { LeagueService } from "../services/league_service";

export const Dispatcher = (components: string[]): Promise<string> => {
  const botMention = components.shift();
  if (!botMention)
    throw Error("Dispatcher requires components to have length greater than 0");
  let service: IService = new HelpService(botMention);
  if (components.length === 0) return service.buildMessage();

  const botService = components[0].trim().toLowerCase();
  console.log(`Service: ${botService}`);
  switch (true) {
    case LeagueService.canProcess(botService):
      service = new LeagueService(botMention);
      const messageComponents = components.splice(1, components.length); // Component without the bot user
      return service.buildMessage(messageComponents);
  }
  return service.buildMessage();
};
