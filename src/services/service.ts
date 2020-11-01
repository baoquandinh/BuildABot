// TODO
// Every service needs to have a 'help' text
interface IService {
  buildMessage(components?: string[]): Promise<string>;
  helpMessage: string;
}
