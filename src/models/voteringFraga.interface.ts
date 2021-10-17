import { Partibeteckning } from './partibeteckning.enum';

export interface IPersonMedVotering {
  voteringFraga: IVoteringFragaItem;
  voteringSvar: IVoteringSvarItem;
  partigrupperatSvar: IPartiGrupperatSvarList;
}

export interface IVoteringFragaItem {
  dokumentId: string;
  organ: string;
  datum: string;
  titel: string;
}

export interface IVoteringSvarItem {
  fornamn: string;
  efternamn: string;
  parti: Partibeteckning;
  rost: string;
  punkt: string;
  avser: string;
}

export interface IPartiGrupperatSvarList {
  S: IPartiGrupperatSvar;
  '-': IPartiGrupperatSvar;
  SD: IPartiGrupperatSvar;
  KD: IPartiGrupperatSvar;
  M: IPartiGrupperatSvar;
  C: IPartiGrupperatSvar;
  V: IPartiGrupperatSvar;
  MP: IPartiGrupperatSvar;
  L: IPartiGrupperatSvar;
}

export interface IPartiGrupperatSvar {
  antalJa: number;
  antalNej: number;
  antalAvsta: number;
  antalFranvarande: number;
}
