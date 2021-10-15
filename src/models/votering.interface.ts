export interface VoteringItem {
  hangar_id: string;
  rm: string;
  beteckning: string;
  punkt: string;
  votering_id: string;
  intressent_id: string;
  namn: string;
  fornamn: string;
  efternamn: string;
  valkrets: string;
  iort: string;
  parti: string;
  banknummer: string;
  kon: string;
  fodd: string;
  rost: string;
  avser: string;
  votering: string;
  votering_url_xml: string;
  dok_id: string;
  systemdatum: Date;
}

export interface IVoteringList {
  votering: Array<VoteringItem>;
  '@grupp8': string;
  '@grupp7': string;
  '@grupp6': string;
  '@grupp5': string;
  '@grupp4': string;
  '@grupp3': string;
  '@grupp1': string;
  '@grupp2': string;
  '@gruppering': string;
  '@villkor': string;
  '@antal': string;
}

export interface IVotering {
  voteringlista: IVoteringList;
}
