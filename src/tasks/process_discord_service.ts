import { IDiscordService } from "../resources/models/discord_service";

interface IContext {
  service: IDiscordService;
}

export const ProcessDiscordService = async (context: IContext) => {
  const { service } = context;
  const serviceName = service.name;
  switch(serviceName) {
    case 'Other':
        
        break;  
    default:
          break;
  }
};
