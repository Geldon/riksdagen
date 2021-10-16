import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {IPerson} from "../../models/person.interface";
import {RiksdagenService} from "../services/riksdagen.service";
import {Partibeteckning} from "../../models/partibeteckning.enum";
import {PartiService} from "../services/parti.service";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  personId: string;
  readonly person$: Observable<IPerson>;
  votes: Array<any> = [
    {
      title: 'Riksrevisionens rapport om arbetssökande över 55 år',
      voted: 'yes',
      date: '2021-10-03'
    },
    {
      title: 'Riksrevisionens rapport om arbetssökande över 55 år',
      voted: 'no',
      date: '2021-10-03'
    },
    {
      title: 'Riksrevisionens rapport om arbetssökande över 55 år',
      voted: 'blank',
      date: '2021-10-03'
    },
    {
      title: 'Riksrevisionens rapport om arbetssökande över 55 år',
      voted: 'absent',
      date: '2021-10-03'
    }
  ];

  constructor(private riksdagenService: RiksdagenService,
              private actRoute: ActivatedRoute,
              private partiService: PartiService) {
    this.personId = this.actRoute.snapshot.params.personId;
    this.person$ = this.riksdagenService.getPerson(this.personId);
  }

  ngOnInit(): void {
  }

  getPartiName(partiBeteckning: Partibeteckning) {
    return this.partiService.getPartiName(partiBeteckning)
  }

}
