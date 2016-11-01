export interface Fixture {
  date: String,
  status: String,
  matchday: Number,
  homeTeamName: String,
  awayTeamName: String,
  result: TFixtureResult,
  odds: TFixtureResult
}


export interface TFixtureResult {
  goalsHomeTeam: Number,
  goalsAwayTeam: Number
}


export interface  TFixtureOdds {
  homeWin: Number,
  draw: Number,
  awayWin: Number
}


