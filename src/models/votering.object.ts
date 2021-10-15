import { IVotering, IVoteringList } from './votering.interface';

export class Votering implements IVotering {
  voteringlista: IVoteringList;

  constructor(data: any) {
    this.voteringlista = {
      ...data?.voteringlista,
      systemDatum: data?.voteringlista?.systemDatum
        ? new Date(data?.systemDatum)
        : undefined,
    };
  }
}
