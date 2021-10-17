import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PersonerComponent} from "./personer/personer.component";
import {PersonComponent} from "./person/person.component";
import {VoteComponent} from "./vote/vote.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'ledamoter',
    component: PersonerComponent
  },
  {
    path: 'ledamot/:personId',
    component: PersonComponent
  },
  {
    path: 'votering',
    component: VoteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
