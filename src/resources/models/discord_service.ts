import { DiscordBotServices } from "../enum/services";

export interface IDiscordService {
  name: DiscordBotServices;
  message: string;
}
