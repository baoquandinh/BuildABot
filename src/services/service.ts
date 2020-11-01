// TODO
// Every service needs to have a 'help' text
interface IService {
  buildMessage(): Promise<string>;
  processComponents(args: string[]): void;
  message: string;
  helpMessage: string;
}
