import { ILeagueChampionAbilities } from "./champion_abilities";

export interface ILeagueActivePlayer {
  abilities: ILeagueChampionAbilities;
  championStats: {};
  currentGold: {};
  fulLRunes: {};
  level: number;
  summonerName: string;
}
