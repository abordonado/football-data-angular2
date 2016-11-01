import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";

const BASE_URL = 'http://api.football-data.org/v1';

@Injectable()
export class FixtureService {

  constructor(private http: Http) { }





  getFixturesByCompetition(id: Number){
    let options = this.configureHeaders();
    let url = BASE_URL+'/competitions/'+id+'/fixtures';
    return this.http.get(url, options)
      .map(response => response.json());
  }



  configureHeaders() {
    let headers = new Headers({
      'X-Auth-Token': localStorage['X-Auth-Token']
    });
    let options = new RequestOptions({ headers: headers })
    return options;
  }


}
