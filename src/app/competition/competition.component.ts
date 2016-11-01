import { Component, OnInit } from '@angular/core';
import {CompetitionService} from "../competition.service";
import {Competition} from "../competition.model";
import {Fixture} from "../fixture.model";
import {FixtureService} from "../fixture.service";


@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  private competitions: Competition[] = [];
  private fixtures: Fixture[] = [];

  constructor(
    private competitionService: CompetitionService,
    private fixtureService: FixtureService) {}

  ngOnInit() {
  }

  getAllCompetitions(){
    this.competitions = [];
    this.competitionService.getAllCompetitions().subscribe(
      competitions => this.competitions = competitions,
      error => console.log(error)
    );
  }



  getCompetition(competition: Competition){
    this.competitions = [];
    this.competitionService.getCompetition(competition.year).subscribe(
      competitions =>  this.competitions = competitions,
      error => console.log(error)
    );
  }


  getFixturesByCompetition(competition: Competition){
    this.fixtures = [];
    this.fixtureService.getFixturesByCompetition(competition.id).subscribe(
      response => this.fixtures = response.fixtures,
      error => console.log(error)
    );
  }

}
