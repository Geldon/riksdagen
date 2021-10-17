import { Partibeteckning } from './partibeteckning.enum';
import { IPartiGrupperatSvar } from './voteringFraga.interface';

export interface IPartiVote extends IPartiGrupperatSvar {
  parti: Partibeteckning;
}
