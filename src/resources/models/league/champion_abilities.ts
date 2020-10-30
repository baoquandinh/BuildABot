import { ILeagueFullInfoReference } from "./info_reference";

export interface ILeagueChampionAbilitiy extends ILeagueFullInfoReference {
  abilityLevel: number;
}

export interface ILeagueChampionAbilities {
  Passive: ILeagueFullInfoReference;
  Q: ILeagueChampionAbilitiy;
  W: ILeagueChampionAbilitiy;
  E: ILeagueChampionAbilitiy;
  R: ILeagueChampionAbilitiy;
}
