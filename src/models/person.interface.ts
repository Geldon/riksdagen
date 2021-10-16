import {Partibeteckning} from "./partibeteckning.enum";

export interface IPerson {
  personId: string;
  foddAr: string;
  kon: string;
  efternamn: string;
  tilltalsnamn: string;
  parti: Partibeteckning;
  valkrets: string;
  status: string;
  bildUrl: string;
  uppdrag: IUppdrag[];
  uppgifter: IUppgift[];
}

export interface IUppgift {
  kod: string;
  uppgift: string;
  typ: string;
}

export interface IUppdrag {
  organKod: string;
  rollKod: string;
  status: string;
  typ: string;
  from: string;
  tom: string;
  uppgift: string
}
