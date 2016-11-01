import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { CompetitionComponent } from './competition/competition.component';
import {CompetitionService} from "./competition.service";
import {FixtureService} from "./fixture.service";

@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [CompetitionService, FixtureService],
  bootstrap: [
    AppComponent,
    CompetitionComponent
  ]
})
export class AppModule { }
