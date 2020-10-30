export interface ILeagueInfoReference {
  displayName: string;
  rawDescription: string;
  rawDisplayName: string;
}


export interface ILeagueFullInfoReference extends ILeagueInfoReference {
  id: string;
}
