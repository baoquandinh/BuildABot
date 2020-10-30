import { LeagueTeamName } from "../../enum/team_name";
import {
  ILeagueFullInfoReference,
  ILeagueInfoReference,
} from "./info_reference";
import { ILeagueItem } from "./item";

export interface ILeaguePlayer {
  championName: string;
  isBot: boolean;
  isDead: boolean;
  items: ILeagueItem[];
  level: number;
  position: string;
  rawChampionName: string;
  rawSkinName: string;
  respawnTimer: number;
  runes: {
    keystone: ILeagueFullInfoReference;
    primaryRuneTree: ILeagueFullInfoReference;
    secondaryRuneTree: ILeagueFullInfoReference;
  };
  scores: {
    assists: number;
    creepScore: number;
    deaths: number;
    kills: number;
    wardScore: number;
  };
  skinID: number;
  skinName: string;
  summonerName: string;
  summonerSpells: {
    summonerSpellOne: ILeagueInfoReference;
    summonerSpellTwo: ILeagueInfoReference;
  };
  team: LeagueTeamName;
}
