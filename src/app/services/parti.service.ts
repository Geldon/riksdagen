import { Injectable } from '@angular/core';
import {Partibeteckning} from "../../models/partibeteckning.enum";

@Injectable({
  providedIn: 'root'
})
export class PartiService {

  constructor() { }

  getPartiName(partibeteckning: Partibeteckning): string {
    let name: string;

    switch (partibeteckning) {
      case Partibeteckning.Centerpartiet:
        name = 'Centerpartiet';
        break;
      case Partibeteckning.Kristdemokraterna:
        name = 'Kristdemokraterna';
        break;
      case Partibeteckning.Liberalerna:
        name = 'Liberalerna';
        break;
      case Partibeteckning.Miljopartiet:
        name = 'Miljöpartiet';
        break;
      case Partibeteckning.Moderaterna:
        name = 'Moderaterna';
        break;
      case Partibeteckning.Socialdemokraterna:
        name = 'Socialdemokraterna';
        break;
      case Partibeteckning.Sverigedemokraterna:
        name = 'Sverigedemokraterna';
        break;
      case Partibeteckning.Vansterpartiet:
        name = 'Vänsterpartiet';
        break;
    }

    return name;
  }
}
