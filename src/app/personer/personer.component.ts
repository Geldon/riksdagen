import { Component, OnInit } from '@angular/core';
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
  persons: Array<IPerson> = [];
  filteredPersons: Array<IPerson> = [];
  loading: boolean = true;

  constructor(private riksdagenService: RiksdagenService,
              private router: Router,
              private partiService: PartiService) {
    this.riksdagenService.getPersoner().subscribe(persons => {
      this.loading = false;
      this.persons = persons;
      this.filteredPersons = persons;
    });
  }

  ngOnInit(): void {
  }

  goToPerson(personId: string) {
    this.router.navigate(['ledamot', personId]);
  }

  filterList(event: PersonfilterData | null) {
    if (!event) {
      this.filteredPersons = this.persons;
      return;
    }

    const trimmed = event.text?.trim().toLowerCase();

    this.filteredPersons = this.persons.filter(person => {
      const textMatch = !trimmed || trimmed.length === 0 ? true : this.checkIfContains(person.tilltalsnamn, trimmed) ||
        this.checkIfContains(person.efternamn, trimmed) ||
        this.checkIfContains(person.tilltalsnamn + ' ' + person.efternamn, trimmed)

      const partiMatch = event.partibeteckningar.some(partibeteckning => {
        return partibeteckning.toString() === person.parti.toString();
      });

      return textMatch && partiMatch;
    })
  }

  checkIfContains(name: string, filterString: string) {
    return name.toLowerCase().includes(filterString);
  }

  getPartiName(partiBeteckning: Partibeteckning) {
    return this.partiService.getPartiName(partiBeteckning)
  }

  getPartiLogoImageCssClass(partibeteckning: Partibeteckning): string {
    return `personfilter__partibeteckningar__parti__logo--${partibeteckning?.toLowerCase()}`;
  }
}
