import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {IPerson} from "../../models/person.interface";
import {RiksdagenService} from "../services/riksdagen.service";

@Component({
  selector: 'app-personer',
  templateUrl: './personer.component.html',
  styleUrls: ['./personer.component.scss']
})
export class PersonerComponent implements OnInit {
  readonly personer$: Observable<Array<IPerson>>;

  constructor(private riksdagenService: RiksdagenService) {
    this.personer$ = this.riksdagenService.getPersoner()
  }

  ngOnInit(): void {
  }

  goToPerson(personId: string) {
    console.log('personId: ', personId)
  }
}
