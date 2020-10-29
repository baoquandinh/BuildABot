// TODO
// Every service needs to have a 'help' text 
interface IService {
    buildMessage(): Promise<string>;
    helpMessage: string;
}