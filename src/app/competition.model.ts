export interface Competition {
  id: number,
  caption: string,
  league: string,
  year: number,
  currentMatchday: number,
  numberOfMatchdays: number,
  numberOfTeams: number,
  numberOfGames: number,
  lastUpdated: string
  //TODO: Change lastUpdated to Date
}
