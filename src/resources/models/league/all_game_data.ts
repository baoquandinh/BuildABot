import { ILeagueActivePlayer } from "./active_player";
import { ILeagueEvent } from "./events";
import { ILeaguePlayer } from "./player";

export interface ILeagueAllGameData {
  activePlayer: ILeagueActivePlayer;
  allPlayers: ILeaguePlayer[];
  events: {
    Events: ILeagueEvent[];
  };
  gameData: {};
}
