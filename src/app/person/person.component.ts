import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {RiksdagenService} from "../services/riksdagen.service";
import {Partibeteckning} from "../../models/partibeteckning.enum";
import {PartiService} from "../services/parti.service";
import {IPersonMedVotering} from "../../models/voteringFraga.interface";
import {IPerson} from "../../models/person.interface";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  personId: string;
  person: IPerson | undefined;
  voteringar: Array<IPersonMedVotering> = [];
  votes: Array<any> = [
    {
      id: '1',
      title: 'Riksrevisionens rapport om arbetssökande över 55 år',
      voted: 'yes',
      date: '2021-10-15'
    },
    {
      id: '2',
      title: 'Utgiftsområde 13 Jämställdhet och nyanlända invandrares etablering',
      voted: 'no',
      date: '2021-10-03'
    },
    {
      id: '3',
      title: 'Riksrevisionens rapport om arbetssökande över 55 år',
      voted: 'blank',
      date: '2021-05-25'
    },
    {
      id: '4',
      title: 'Utgiftsområde 13 Jämställdhet och nyanlända invandrares etablering',
      voted: 'absent',
      date: '2020-11-10'
    }
  ];
  loading: boolean = true;

  constructor(private riksdagenService: RiksdagenService,
              private actRoute: ActivatedRoute,
              private partiService: PartiService,
              private router: Router) {
    this.personId = this.actRoute.snapshot.params.personId;
    this.riksdagenService.getPerson(this.personId).subscribe(person => {
      this.person = person;
    });
    this.riksdagenService.getVoteringar(this.personId).subscribe(voteringar => {
      this.loading = false;
      this.voteringar = voteringar;
    });
  }

  ngOnInit(): void {
  }

  getPartiName(partiBeteckning: Partibeteckning) {
    return this.partiService.getPartiName(partiBeteckning)
  }

  goToVote(votering: IPersonMedVotering) {
    this.riksdagenService.setVoteringItem(votering)
    this.router.navigate(['votering']);
  }
}
