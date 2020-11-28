interface IService {
  buildMessage(components?: string[]): Promise<string>;
  helpMessage: string;
}
