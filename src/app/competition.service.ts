///<reference path="../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {Injectable, OnInit} from '@angular/core';
import {Response, Http, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx';


const BASE_URL = 'http://api.football-data.org/v1/competitions';

@Injectable()
export class CompetitionService {

  constructor(private http: Http) { }



  getAllCompetitions() {
    let options = this.configureHeaders();
    return this.http.get(BASE_URL, options)
      .map(response => response.json());
  }


  getCompetition(season: Number){
    let options = this.configureHeaders();
    let url = BASE_URL+"?season="+season
    return this.http.get(url, options)
      .map(response => response.json());
  }



  //TODO: Handle error
  private handleError(error: any) {
    console.error(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text())
  }



  configureHeaders() {
    let headers = new Headers({
      'X-Auth-Token': localStorage['X-Auth-Token']
    });
    let options = new RequestOptions({ headers: headers })
    return options;
  }

}
