import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {IPerson} from "../../models/person.interface";
import {RiksdagenService} from "../services/riksdagen.service";
import {Router} from "@angular/router";
import {PersonfilterData} from "../components/personfilter/personfilter.component";
import {PartiService} from "../services/parti.service";
import {Partibeteckning} from "../../models/partibeteckning.enum";

@Component({
  selector: 'app-personer',
  templateUrl: './personer.component.html',
  styleUrls: ['./personer.component.scss']
})
export class PersonerComponent implements OnInit {
  readonly personer$: Observable<Array<IPerson>>;

  constructor(private riksdagenService: RiksdagenService,
              private router: Router,
              private partiService: PartiService) {
    this.personer$ = this.riksdagenService.getPersoner()
  }

  ngOnInit(): void {
  }

  goToPerson(personId: string) {
    this.router.navigate(['ledamot', personId]);
  }

  filterList($event: PersonfilterData | null) {

  }

  getPartiName(partiBeteckning: Partibeteckning) {
    return this.partiService.getPartiName(partiBeteckning)
  }
}
