export interface ILeagueEvent {
  EventID: number;
  EventName: string;
  EventTime: number;
  Assisters?: string[];
  DragonType?: string;
  Stolen?: boolean;
  KillerName?: string;
  VictimName?: string;
  KillStreak?: number;
}
