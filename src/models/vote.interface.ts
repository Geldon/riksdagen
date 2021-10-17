import {Partibeteckning} from "./partibeteckning.enum";

export interface IPartiVote {
  parti: Partibeteckning;
  antalJa: number;
  antalNej: number;
  antalAvsta: number;
  antalFranvarande: number;
}
