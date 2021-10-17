import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Votering } from 'src/models/votering.object';
import { IVotering } from 'src/models/votering.interface';
import { IUtskott } from 'src/models/utskott.interface';
import {IPerson} from "../../models/person.interface";

@Injectable({
  providedIn: 'root',
})
export class RiksdagenService {
  //Swagger uri: https://app-hackit-politiker-211015111946.azurewebsites.net/webjars/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config

  private readonly baseUrl =
    'https://app-hackit-politiker-211015111946.azurewebsites.net';

  constructor(private httpClient: HttpClient) {}

  getVotering(size: number = 500): Observable<IVotering> {
    const url = `${this.baseUrl}/votering`;
    const params: HttpParams = new HttpParams().set('size', size);

    return this.httpClient
      .get<IVotering>(url, { params: params })
      .pipe(map((data: any) => new Votering(data)));
  }

  getUtskott(): Observable<Array<IUtskott>> {
    const url = `${this.baseUrl}/organ/utskott`;

    return this.httpClient.get<Array<IUtskott>>(url);
  }

  getPersoner(partiKod?: string, utskottKod?: string): Observable<Array<IPerson>> {

    const personer = [
      {
      "personId": "34f7ceb6-9f7c-4b37-a15e-1c61ffa639e5",
      "foddAr": "1962",
      "kon": "man",
      "efternamn": "Carlsson",
      "tilltalsnamn": "ClasGöran",
      "parti": "S",
      "valkrets": "Kronobergs län",
      "status": "Tjänstgörande statsrådsersättare",
      "bildUrl": "http://data.riksdagen.se/filarkiv/bilder/ledamot/34f7ceb6-9f7c-4b37-a15e-1c61ffa639e5_max.jpg",
      "uppdrag": [
        {
          "organKod": "kam",
          "rollKod": "Statsrådsersättare",
          "status": "Ersättare",
          "typ": "kammaruppdrag",
          "from": "2018-09-24",
          "tom": "2022-09-26",
          "uppgift": "Tomas Eneroth"
        },
        {
          "organKod": "kam",
          "rollKod": "Statsrådsersättare",
          "status": "Ersättare",
          "typ": "kammaruppdrag",
          "from": "2017-07-27",
          "tom": "2018-09-24",
          "uppgift": "Tomas Eneroth"
        },
        {
          "organKod": "kam",
          "rollKod": "Riksdagsledamot",
          "status": "Tjänstgörande",
          "typ": "kammaruppdrag",
          "from": "2010-10-04",
          "tom": "2014-09-29",
          "uppgift": ""
        },
        {
          "organKod": "AU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2020-03-18",
          "tom": "2022-09-26",
          "uppgift": "Arbetsmarknadsutskottet"
        },
        {
          "organKod": "CU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2020-03-18",
          "tom": "2022-09-26",
          "uppgift": "Civilutskottet"
        },
        {
          "organKod": "FiU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2020-03-18",
          "tom": "2022-09-26",
          "uppgift": "Finansutskottet"
        },
        {
          "organKod": "FöU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2018-10-02",
          "tom": "2022-09-26",
          "uppgift": "Försvarsutskottet"
        },
        {
          "organKod": "JuU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2020-03-18",
          "tom": "2022-09-26",
          "uppgift": "Justitieutskottet"
        },
        {
          "organKod": "KrU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2020-03-18",
          "tom": "2022-09-26",
          "uppgift": "Kulturutskottet"
        },
        {
          "organKod": "MJU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2020-03-18",
          "tom": "2022-09-26",
          "uppgift": "Miljö- och jordbruksutskottet"
        },
        {
          "organKod": "NU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2020-03-18",
          "tom": "2022-09-26",
          "uppgift": "Näringsutskottet"
        },
        {
          "organKod": "SfU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2020-03-18",
          "tom": "2022-09-26",
          "uppgift": "Socialförsäkringsutskottet"
        },
        {
          "organKod": "SkU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2020-03-18",
          "tom": "2022-09-26",
          "uppgift": "Skatteutskottet"
        },
        {
          "organKod": "SoU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2020-03-18",
          "tom": "2022-09-26",
          "uppgift": "Socialutskottet"
        },
        {
          "organKod": "TU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2020-03-18",
          "tom": "2022-09-26",
          "uppgift": "Trafikutskottet"
        },
        {
          "organKod": "UbU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2020-03-18",
          "tom": "2022-09-26",
          "uppgift": "Utbildningsutskottet"
        },
        {
          "organKod": "KU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2020-03-18",
          "tom": "2020-09-03",
          "uppgift": "Konstitutionsutskottet"
        },
        {
          "organKod": "UU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2020-03-18",
          "tom": "2020-09-03",
          "uppgift": "Utrikesutskottet"
        },
        {
          "organKod": "CU",
          "rollKod": "Ledamot",
          "status": "",
          "typ": "uppdrag",
          "from": "2018-04-11",
          "tom": "2018-09-24",
          "uppgift": "Civilutskottet"
        },
        {
          "organKod": "NU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2017-10-13",
          "tom": "2018-09-24",
          "uppgift": "Näringsutskottet"
        },
        {
          "organKod": "CU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2017-09-22",
          "tom": "2018-04-11",
          "uppgift": "Civilutskottet"
        },
        {
          "organKod": "FöU",
          "rollKod": "Ledamot",
          "status": "",
          "typ": "uppdrag",
          "from": "2010-10-12",
          "tom": "2014-09-29",
          "uppgift": "Försvarsutskottet"
        },
        {
          "organKod": "CU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2010-10-12",
          "tom": "2014-09-29",
          "uppgift": "Civilutskottet"
        },
        {
          "organKod": "UFöU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2021-03-18",
          "tom": "2021-04-21",
          "uppgift": "Sammansatta utrikes- och försvarsutskottet"
        },
        {
          "organKod": "UFöU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2020-11-10",
          "tom": "2020-12-15",
          "uppgift": "Sammansatta utrikes- och försvarsutskottet"
        },
        {
          "organKod": "UFöU",
          "rollKod": "Deputerad",
          "status": "",
          "typ": "uppdrag",
          "from": "2020-03-26",
          "tom": "2020-09-13",
          "uppgift": "Sammansatta utrikes- och försvarsutskottet"
        },
        {
          "organKod": "CKrU",
          "rollKod": "Extra suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2018-03-13",
          "tom": "2018-05-24",
          "uppgift": "Sammansatta civil- och kulturutskottet"
        },
        {
          "organKod": "UFöU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2014-04-15",
          "tom": "2014-06-12",
          "uppgift": "Sammansatta utrikes- och försvarsutskottet"
        },
        {
          "organKod": "UFöU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2013-11-26",
          "tom": "2013-12-17",
          "uppgift": "Sammansatta utrikes- och försvarsutskottet"
        },
        {
          "organKod": "UFöU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2013-04-23",
          "tom": "2013-06-18",
          "uppgift": "Sammansatta utrikes- och försvarsutskottet"
        },
        {
          "organKod": "UFöU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2013-02-21",
          "tom": "2013-03-06",
          "uppgift": "Sammansatta utrikes- och försvarsutskottet"
        },
        {
          "organKod": "UFöU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2012-11-27",
          "tom": "2012-12-19",
          "uppgift": "Sammansatta utrikes- och försvarsutskottet"
        },
        {
          "organKod": "UFöU",
          "rollKod": "Deputerad",
          "status": "",
          "typ": "uppdrag",
          "from": "2011-11-24",
          "tom": "2011-12-14",
          "uppgift": "Sammansatta utrikes- och försvarsutskottet"
        },
        {
          "organKod": "UFöU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2011-09-20",
          "tom": "2011-09-21",
          "uppgift": "Sammansatta utrikes- och försvarsutskottet"
        },
        {
          "organKod": "UFöU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2011-06-16",
          "tom": "2011-06-17",
          "uppgift": "Sammansatta utrikes- och försvarsutskottet"
        },
        {
          "organKod": "UFöU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2011-03-31",
          "tom": "2011-04-01",
          "uppgift": "Sammansatta utrikes- och försvarsutskottet"
        },
        {
          "organKod": "UFöU",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2010-11-23",
          "tom": "2010-12-15",
          "uppgift": "Sammansatta utrikes- och försvarsutskottet"
        },
        {
          "organKod": "EUN",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "uppdrag",
          "from": "2020-03-18",
          "tom": "2022-10-04",
          "uppgift": "EU-nämnden"
        },
        {
          "organKod": "RB",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "Riksdagsorgan",
          "from": "2018-10-09",
          "tom": "2022-10-09",
          "uppgift": "Riksbanksfullmäktige"
        },
        {
          "organKod": "ÖN",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "Riksdagsorgan",
          "from": "2018-10-09",
          "tom": "2022-10-09",
          "uppgift": "Riksdagens överklagandenämnd"
        },
        {
          "organKod": "RB",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "Riksdagsorgan",
          "from": "2014-10-14",
          "tom": "2018-10-09",
          "uppgift": "Riksbanksfullmäktige"
        },
        {
          "organKod": "NATO",
          "rollKod": "Suppleant",
          "status": "",
          "typ": "Riksdagsorgan",
          "from": "2010-11-17",
          "tom": "2014-09-29",
          "uppgift": "Riksdagens delegation till Natos parlamentariska församling"
        }
      ],
      "uppgifter": [
        {
          "kod": "Uppdrag inom riksdag och regering",
          "uppgift": "Riksdagsledamot 10-14 och 17- (statsrådsersättare 170727-180924 och 180924-). Ledamot försvarsutskottet 10-14, sammansatta utrikes- och försvarsutskottet 11 och civilutskottet 18. Suppleant civilutskottet 10-18, sammansatta utrikes- och försvarsutskottet 11, 12, 13 och 14, näringsutskottet 17-18 och försvarsutskottet 18-. Extra suppleant sammansatta civil- och kulturutskottet 18. Suppleant Riksdagens delegation till Natos parlamentariska församling 10-14, Riksbanksfullmäktige 14- och Riksdagens överklagandenämnd 18-.",
          "typ": "biografi"
        },
        {
          "kod": "Föräldrar",
          "uppgift": "Svetsaren Göran Carlsson och kanslisten Elsie-Britt Carlsson, f. Linder.",
          "typ": "biografi"
        },
        {
          "kod": "Utbildning",
          "uppgift": "Gymnasieskola, samhällsvetenskaplig linje, Sunnerboskolan, Ljungby 78-81. Företagsekonomi, Halmstads högskola 83-85. Nationalekonomi, Högskolan i Växjö 83-85.",
          "typ": "biografi"
        },
        {
          "kod": "Anställningar",
          "uppgift": "Lärarvikarie, Ljungby kommun 82-83. Banktjänsteman, Götabanken 83-86 och Sparbanken Kronan 86-87. Bankkamrer, Sparbanken Kronan 87-92. Verkställande direktör, Bertil Nilsson Måleri AB 92-02.",
          "typ": "biografi"
        },
        {
          "kod": "Uppdrag inom statliga myndigheter m.m.",
          "uppgift": "Ordförande, Polisstyrelsen i Kronobergs län -99, vice ordförande 07-10. Statens inspektion för försvarsunderrättelseverksamhet 14-18 samt 19-.",
          "typ": "biografi"
        },
        {
          "kod": "Kommunala uppdrag",
          "uppgift": "Kommunfullmäktig, Ljungby 02-10. Ordförande, kommunstyrelsen 03-07, 1:e vice ordförande 07-10. Ledamot, Kommunförbundet Kronoberg/Regionförbundet Södra Småland 03-10. Vice ordförande ALMI Kronoberg 15-19. Ordförande AB Destination Småland 15-19 och Växjö Småland Airport AB 15-19.",
          "typ": "biografi"
        },
        {
          "kod": "Uppdrag inom förenings- och näringsliv",
          "uppgift": "Ledamot, Socialdemokraterna Kronobergs distriktsstyrelse och verkställande utskott 99-19. Styrelsedamot, Måleriföretagen 03-11 samt 16-. Ordförande, Hallands Travsällskap 17-.",
          "typ": "biografi"
        },
        {
          "kod": "Bostadsort",
          "uppgift": "Ljungby",
          "typ": "biografi"
        },
        {
          "kod": "Officiell e-postadress",
          "uppgift": "clasgoran.carlsson[på]riksdagen.se",
          "typ": "eadress"
        },
        {
          "kod": "sv",
          "uppgift": "Direktör.",
          "typ": "titlar"
        },
        {
          "kod": "en",
          "uppgift": "",
          "typ": "titlar"
        },
        {
          "kod": "KandiderarINastaVal",
          "uppgift": "true",
          "typ": "val"
        }
      ]
    },
      {
        "personId": "b0cce726-5e23-4d21-a609-95071f8820f0",
        "foddAr": "1987",
        "kon": "kvinna",
        "efternamn": "Busch",
        "tilltalsnamn": "Ebba",
        "parti": "KD",
        "valkrets": "Västra Götalands läns östra",
        "status": "Tjänstgörande riksdagsledamot",
        "bildUrl": "http://data.riksdagen.se/filarkiv/bilder/ledamot/b0cce726-5e23-4d21-a609-95071f8820f0_max.jpg",
        "uppdrag": [
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2018-09-24",
            "tom": "2022-09-26",
            "uppgift": ""
          },
          {
            "organKod": "KD",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2018-10-09",
            "tom": "2022-10-09",
            "uppgift": "Krigsdelegationen"
          },
          {
            "organKod": "UN",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2018-10-02",
            "tom": "2022-10-02",
            "uppgift": "Utrikesnämnden"
          },
          {
            "organKod": "KD",
            "rollKod": "Partiledare",
            "status": "",
            "typ": "partiuppdrag",
            "from": "2015-04-25",
            "tom": "",
            "uppgift": "Kristdemokraterna"
          },
          {
            "organKod": "KD",
            "rollKod": "Partiledare",
            "status": "",
            "typ": "partiuppdrag",
            "from": "2015-04-25",
            "tom": "",
            "uppgift": "Kristdemokraterna"
          }
        ],
        "uppgifter": [
          {
            "kod": "Uppdrag inom riksdag och regering",
            "uppgift": "Riksdagsledamot 18-. Ledamot Utrikesnämnden 18- och krigsdelegationen 18-. Partiledare Kristdemokraterna 15-.",
            "typ": "biografi"
          },
          {
            "kod": "Utbildning",
            "uppgift": "Grundskola. Gymnasieskola, IB-programmet, Uppsala. Freds- och konfliktkunskap, Uppsala universitet.",
            "typ": "biografi"
          },
          {
            "kod": "Anställningar",
            "uppgift": "Utomhusmålare. Kommunpolitisk sekreterare, Kristdemokraterna 06-10. PR-konsult. Kommunalråd, Uppsala kommun 10-15.",
            "typ": "biografi"
          },
          {
            "kod": "Kommunala uppdrag",
            "uppgift": "Kommunalråd, Uppsala 10-15.",
            "typ": "biografi"
          },
          {
            "kod": "Uppdrag inom förenings- och näringsliv",
            "uppgift": "Vice förbundsordförande KDU 08-11. Ledamot Kristdemokraternas partistyrelse 13-, Partiordförande, Kristdemokraterna 15-. ",
            "typ": "biografi"
          },
          {
            "kod": "Officiell e-postadress",
            "uppgift": "ebba.busch[på]riksdagen.se",
            "typ": "eadress"
          }
        ]
      },
      {
        "personId": "ed3399e1-7bce-4ea4-baf6-587f722710f5",
        "foddAr": "1981",
        "kon": "kvinna",
        "efternamn": "Westerén",
        "tilltalsnamn": "Hanna",
        "parti": "S",
        "valkrets": "Gotlands län",
        "status": "Tjänstgörande riksdagsledamot",
        "bildUrl": "http://data.riksdagen.se/filarkiv/bilder/ledamot/ed3399e1-7bce-4ea4-baf6-587f722710f5_max.jpg",
        "uppdrag": [
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2018-09-24",
            "tom": "2022-09-26",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2018-07-16",
            "tom": "2018-09-24",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Ledig",
            "typ": "kammaruppdrag",
            "from": "2017-10-09",
            "tom": "2018-07-15",
            "uppgift": "David Lindvall 2017-10-09 - 2018-07-15  Föräldraledighet"
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2015-02-01",
            "tom": "2017-10-08",
            "uppgift": ""
          },
          {
            "organKod": "MJU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2018-10-02",
            "tom": "2022-09-26",
            "uppgift": "Miljö- och jordbruksutskottet"
          },
          {
            "organKod": "AU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Arbetsmarknadsutskottet"
          },
          {
            "organKod": "CU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Civilutskottet"
          },
          {
            "organKod": "FiU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Finansutskottet"
          },
          {
            "organKod": "JuU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Justitieutskottet"
          },
          {
            "organKod": "KrU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Kulturutskottet"
          },
          {
            "organKod": "NU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Näringsutskottet"
          },
          {
            "organKod": "SfU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Socialförsäkringsutskottet"
          },
          {
            "organKod": "SkU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Skatteutskottet"
          },
          {
            "organKod": "SoU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Socialutskottet"
          },
          {
            "organKod": "TU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Trafikutskottet"
          },
          {
            "organKod": "UbU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Utbildningsutskottet"
          },
          {
            "organKod": "FöU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Försvarsutskottet"
          },
          {
            "organKod": "KU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Konstitutionsutskottet"
          },
          {
            "organKod": "UU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Utrikesutskottet"
          },
          {
            "organKod": "NU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2018-04-12",
            "tom": "2018-09-24",
            "uppgift": "Näringsutskottet"
          },
          {
            "organKod": "NU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2017-04-27",
            "tom": "2018-04-12",
            "uppgift": "Näringsutskottet"
          },
          {
            "organKod": "NU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2015-02-01",
            "tom": "2017-04-27",
            "uppgift": "Näringsutskottet"
          },
          {
            "organKod": "EUN",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-10-04",
            "uppgift": "EU-nämnden"
          },
          {
            "organKod": "EUN",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2015-10-31",
            "tom": "2018-10-02",
            "uppgift": "EU-nämnden"
          },
          {
            "organKod": "KD",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2018-10-09",
            "tom": "2022-10-09",
            "uppgift": "Krigsdelegationen"
          }
        ],
        "uppgifter": [
          {
            "kod": "Uppdrag inom riksdag och regering",
            "uppgift": "Riksdagsledamot 15-. Ledamot näringsutskottet 18 och miljö- och jordbruksutskottet 18-. Suppleant näringsutskottet 15-18 och  EU-nämnden 15-18. Ledamot krigsdelegationen 18-.",
            "typ": "biografi"
          },
          {
            "kod": "Föräldrar",
            "uppgift": "Revisorn Gunder Nyman och undersköterskan Inga-Maj Nyman, f. Samuelsson.",
            "typ": "biografi"
          },
          {
            "kod": "Utbildning",
            "uppgift": "Gymnasieskola, Visby, slutår 00. Filosofie magisterexamen i europeisk historia, Högskolan på Gotland 07.",
            "typ": "biografi"
          },
          {
            "kod": "Anställningar",
            "uppgift": "Försäkringskassan 01-.",
            "typ": "biografi"
          },
          {
            "kod": "Uppdrag inom statliga myndigheter m.m.",
            "uppgift": "Ledamot, insynsrådet, Länsstyrelsen Gotland 11-.",
            "typ": "biografi"
          },
          {
            "kod": "Kommunala uppdrag",
            "uppgift": "Kommunfullmäktig, Gotland 06-. Kommunstyrelsen, Gotland 06-14. Vice ordförande, regionstyrelsen, Gotland 10-14. Suppleant, barn- och utbildningsnämnden, Gotland 05-06, ledamot 06-10. Ledamot, gymnasie- och vuxenutbildningsnämnden, Gotland 09-10. Ordförande, socialnämnden, Gotland 11-14. Ordförande, Tryggare Gotland 11-14. Ordförande, Finsam Gotland 11-14.",
            "typ": "biografi"
          },
          {
            "kod": "Uppdrag inom förenings- och näringsliv",
            "uppgift": "Vice ordförande, Socialdemokraterna Gotland 11-. Ledamot, partistyrelsen Socialdemokraterna 14-. ",
            "typ": "biografi"
          },
          {
            "kod": "Officiell e-postadress",
            "uppgift": "hanna.westeren[på]riksdagen.se",
            "typ": "eadress"
          },
          {
            "kod": "sv",
            "uppgift": "Utredare.",
            "typ": "titlar"
          },
          {
            "kod": "en",
            "uppgift": "",
            "typ": "titlar"
          },
          {
            "kod": "KandiderarINastaVal",
            "uppgift": "true",
            "typ": "val"
          }
        ]
      },
      {
        "personId": "2131f2eb-348c-4b92-8e76-52c134d79919",
        "foddAr": "1978",
        "kon": "man",
        "efternamn": "Fransson",
        "tilltalsnamn": "Josef",
        "parti": "SD",
        "valkrets": "Västra Götalands läns östra",
        "status": "Tjänstgörande riksdagsledamot",
        "bildUrl": "http://data.riksdagen.se/filarkiv/bilder/ledamot/2131f2eb-348c-4b92-8e76-52c134d79919_max.jpg",
        "uppdrag": [
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2018-09-24",
            "tom": "2022-09-26",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2014-09-29",
            "tom": "2018-09-24",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2010-10-04",
            "tom": "2014-09-29",
            "uppgift": ""
          },
          {
            "organKod": "AU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-20",
            "tom": "2022-09-26",
            "uppgift": "Arbetsmarknadsutskottet"
          },
          {
            "organKod": "CU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-20",
            "tom": "2022-09-26",
            "uppgift": "Civilutskottet"
          },
          {
            "organKod": "FiU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-20",
            "tom": "2022-09-26",
            "uppgift": "Finansutskottet"
          },
          {
            "organKod": "JuU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Justitieutskottet"
          },
          {
            "organKod": "KrU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Kulturutskottet"
          },
          {
            "organKod": "MJU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Miljö- och jordbruksutskottet"
          },
          {
            "organKod": "NU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2019-06-18",
            "tom": "2022-09-26",
            "uppgift": "Näringsutskottet"
          },
          {
            "organKod": "SfU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Socialförsäkringsutskottet"
          },
          {
            "organKod": "SkU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Skatteutskottet"
          },
          {
            "organKod": "SoU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Socialutskottet"
          },
          {
            "organKod": "TU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Trafikutskottet"
          },
          {
            "organKod": "UbU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Utbildningsutskottet"
          },
          {
            "organKod": "FöU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-20",
            "tom": "2020-09-03",
            "uppgift": "Försvarsutskottet"
          },
          {
            "organKod": "KU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Konstitutionsutskottet"
          },
          {
            "organKod": "UU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Utrikesutskottet"
          },
          {
            "organKod": "FöU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2018-10-02",
            "tom": "2019-06-19",
            "uppgift": "Försvarsutskottet"
          },
          {
            "organKod": "NU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2018-10-02",
            "tom": "2019-06-18",
            "uppgift": "Näringsutskottet"
          },
          {
            "organKod": "NU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2014-10-07",
            "tom": "2018-09-24",
            "uppgift": "Näringsutskottet"
          },
          {
            "organKod": "MJU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2014-10-14",
            "tom": "2018-09-24",
            "uppgift": "Miljö- och jordbruksutskottet"
          },
          {
            "organKod": "MJU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2010-10-12",
            "tom": "2014-09-29",
            "uppgift": "Miljö- och jordbruksutskottet"
          },
          {
            "organKod": "NU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2012-01-25",
            "tom": "2014-09-29",
            "uppgift": "Näringsutskottet"
          },
          {
            "organKod": "KrU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2010-10-12",
            "tom": "2013-02-21",
            "uppgift": "Kulturutskottet"
          },
          {
            "organKod": "TU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2010-11-26",
            "tom": "2013-02-21",
            "uppgift": "Trafikutskottet"
          },
          {
            "organKod": "UFöU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2019-05-09",
            "tom": "2019-06-12",
            "uppgift": "Sammansatta utrikes- och försvarsutskottet"
          },
          {
            "organKod": "UFöU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2018-11-15",
            "tom": "2018-12-05",
            "uppgift": "Sammansatta utrikes- och försvarsutskottet"
          },
          {
            "organKod": "EUN",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2018-10-09",
            "tom": "2022-10-04",
            "uppgift": "EU-nämnden"
          },
          {
            "organKod": "RB",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2018-10-09",
            "tom": "2022-10-09",
            "uppgift": "Riksbanksfullmäktige"
          }
        ],
        "uppgifter": [
          {
            "kod": "Uppdrag inom riksdag och regering",
            "uppgift": "Riksdagsledamot 10-. Ledamot miljö- och jordbruksutskottet 10-14, näringsutskottet 14-18 och försvarsutskottet 18-. Suppleant kulturutskottet 10-13, trafikutskottet 10-13 näringsutskottet 12-14 och 18-, miljö- och jordbruksutskottet 14-18 och EU-nämnden 18-. Suppleant sammansatta utrikes- och försvarsutskottet 18 och 19. Suppleant riksbanksfullmäktige 18-.",
            "typ": "biografi"
          },
          {
            "kod": "Föräldrar",
            "uppgift": "Mekanikern Lars Erik Johansson och undersköterskan Ewa Fransson.",
            "typ": "biografi"
          },
          {
            "kod": "Uppdrag inom statliga myndigheter m.m.",
            "uppgift": "Ledamot, Gentekniknämnden 10-.",
            "typ": "biografi"
          },
          {
            "kod": "Kommunala uppdrag",
            "uppgift": "Kommunfullmäktig, Skövde 10-.  ",
            "typ": "biografi"
          },
          {
            "kod": "Bostadsort",
            "uppgift": "Skövde",
            "typ": "biografi"
          },
          {
            "kod": "Officiell e-postadress",
            "uppgift": "josef.fransson[på]riksdagen.se",
            "typ": "eadress"
          },
          {
            "kod": "sv",
            "uppgift": "Högskoleingenjör.",
            "typ": "titlar"
          },
          {
            "kod": "en",
            "uppgift": "",
            "typ": "titlar"
          },
          {
            "kod": "KandiderarINastaVal",
            "uppgift": "true",
            "typ": "val"
          }
        ]
      },
      {
        "personId": "727e2213-ac97-4ceb-bfab-f228debd8074",
        "foddAr": "1977",
        "kon": "man",
        "efternamn": "Karlsson",
        "tilltalsnamn": "Mattias",
        "parti": "SD",
        "valkrets": "Kronobergs län",
        "status": "Tjänstgörande riksdagsledamot",
        "bildUrl": "http://data.riksdagen.se/filarkiv/bilder/ledamot/727e2213-ac97-4ceb-bfab-f228debd8074_max.jpg",
        "uppdrag": [
          {
            "organKod": "SD",
            "rollKod": "Gruppledare",
            "status": "",
            "typ": "partiuppdrag",
            "from": "2014-09-29",
            "tom": "2019-11-24 23:59:00",
            "uppgift": "Sverigedemokraterna"
          },
          {
            "organKod": "SD",
            "rollKod": "Vice gruppledare",
            "status": "",
            "typ": "partiuppdrag",
            "from": "2012-05-22",
            "tom": "2014-09-29",
            "uppgift": "Sverigedemokraterna"
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2018-09-24",
            "tom": "2022-09-26",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2014-09-29",
            "tom": "2018-09-24",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2010-10-04",
            "tom": "2014-09-29",
            "uppgift": ""
          },
          {
            "organKod": "AU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-20",
            "tom": "2022-09-26",
            "uppgift": "Arbetsmarknadsutskottet"
          },
          {
            "organKod": "CU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-20",
            "tom": "2022-09-26",
            "uppgift": "Civilutskottet"
          },
          {
            "organKod": "FiU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-20",
            "tom": "2022-09-26",
            "uppgift": "Finansutskottet"
          },
          {
            "organKod": "JuU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Justitieutskottet"
          },
          {
            "organKod": "KrU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2018-10-02",
            "tom": "2022-09-26",
            "uppgift": "Kulturutskottet"
          },
          {
            "organKod": "MJU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Miljö- och jordbruksutskottet"
          },
          {
            "organKod": "NU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Näringsutskottet"
          },
          {
            "organKod": "SfU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Socialförsäkringsutskottet"
          },
          {
            "organKod": "SkU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Skatteutskottet"
          },
          {
            "organKod": "SoU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Socialutskottet"
          },
          {
            "organKod": "TU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Trafikutskottet"
          },
          {
            "organKod": "UbU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Utbildningsutskottet"
          },
          {
            "organKod": "UU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-09-07",
            "tom": "2022-09-26",
            "uppgift": "Utrikesutskottet"
          },
          {
            "organKod": "UU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-06",
            "uppgift": "Utrikesutskottet"
          },
          {
            "organKod": "FöU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-20",
            "tom": "2020-09-03",
            "uppgift": "Försvarsutskottet"
          },
          {
            "organKod": "KU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Konstitutionsutskottet"
          },
          {
            "organKod": "AU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2018-10-09",
            "tom": "2019-06-18",
            "uppgift": "Arbetsmarknadsutskottet"
          },
          {
            "organKod": "AU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2014-10-07",
            "tom": "2018-09-24",
            "uppgift": "Arbetsmarknadsutskottet"
          },
          {
            "organKod": "KrU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2014-10-14",
            "tom": "2018-09-24",
            "uppgift": "Kulturutskottet"
          },
          {
            "organKod": "AU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2012-11-28",
            "tom": "2014-09-29",
            "uppgift": "Arbetsmarknadsutskottet"
          },
          {
            "organKod": "KrU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2013-02-22",
            "tom": "2014-09-29",
            "uppgift": "Kulturutskottet"
          },
          {
            "organKod": "UbU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2011-11-18",
            "tom": "2013-02-21",
            "uppgift": "Utbildningsutskottet"
          },
          {
            "organKod": "KrU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2010-10-12",
            "tom": "2012-11-27",
            "uppgift": "Kulturutskottet"
          },
          {
            "organKod": "EUN",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-10-04",
            "uppgift": "EU-nämnden"
          },
          {
            "organKod": "IPU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2018-10-24",
            "tom": "2022-10-24",
            "uppgift": "Riksdagens delegation till Interparlamentariska unionen"
          },
          {
            "organKod": "KD",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2018-10-09",
            "tom": "2022-10-09",
            "uppgift": "Krigsdelegationen"
          },
          {
            "organKod": "RS",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2018-10-02",
            "tom": "2022-10-02",
            "uppgift": "Riksdagsstyrelsen"
          },
          {
            "organKod": "BSPC",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2018-10-24",
            "tom": "2018-10-24",
            "uppgift": "Riksdagens delegation till parlamentariska Östersjökonferensen"
          },
          {
            "organKod": "KD",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2014-10-14",
            "tom": "2018-10-09",
            "uppgift": "Krigsdelegationen"
          },
          {
            "organKod": "RS",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2014-10-07",
            "tom": "2018-10-02",
            "uppgift": "Riksdagsstyrelsen"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2015-10-01",
            "tom": "2016-09-29",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2014-10-07",
            "tom": "2015-10-01",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2013-09-17",
            "tom": "2014-09-29",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2012-10-04",
            "tom": "2013-09-16",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2011-10-12",
            "tom": "2012-09-18",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2010-10-19",
            "tom": "2011-09-15",
            "uppgift": "Nordiska rådets svenska delegation"
          }
        ],
        "uppgifter": [
          {
            "kod": "Uppdrag inom riksdag och regering",
            "uppgift": "Riksdagsledamot 10-. Ledamot kulturutskottet 10-12 och arbetsmarknadsutskottet 12-14. Suppleant utbildningsutskottet 11-13, arbetsmarknadsutskottet 14- och kulturutskottet 13-. Ledamot krigsdelegationen 14-, riksdagsstyrelsen 14-, riksdagens delegation till Interparlamentariska unionen 18- och riksdagens delegation till parlamentariska Östersjökonferensen 18. Suppleant Nordiska rådets svenska delegation 10-16. Gruppledare, Sverigedemokraterna 14- och vice gruppledare 12-14.",
            "typ": "biografi"
          },
          {
            "kod": "Officiell e-postadress",
            "uppgift": "mattias.karlsson[på]riksdagen.se",
            "typ": "eadress"
          },
          {
            "kod": "Webbsida",
            "uppgift": "http://sverigedemokraterna.se/mattias-karlsson",
            "typ": "eadress"
          },
          {
            "kod": "KandiderarINastaVal",
            "uppgift": "true",
            "typ": "val"
          }
        ]
      },
      {
        "personId": "cbadd933-3375-4216-92fd-3d64a56b5a13",
        "foddAr": "1965",
        "kon": "kvinna",
        "efternamn": "Karlsson",
        "tilltalsnamn": "Annelie",
        "parti": "S",
        "valkrets": "Skåne läns norra och östra",
        "status": "Tjänstgörande riksdagsledamot",
        "bildUrl": "http://data.riksdagen.se/filarkiv/bilder/ledamot/cbadd933-3375-4216-92fd-3d64a56b5a13_max.jpg",
        "uppdrag": [
          {
            "organKod": "S",
            "rollKod": "Vice gruppledare",
            "status": "",
            "typ": "partiuppdrag",
            "from": "2018-10-09",
            "tom": "2019-01-31",
            "uppgift": "Socialdemokraterna"
          },
          {
            "organKod": "S",
            "rollKod": "Vice gruppledare",
            "status": "",
            "typ": "partiuppdrag",
            "from": "2018-03-27",
            "tom": "2018-09-24",
            "uppgift": "Socialdemokraterna"
          },
          {
            "organKod": "S",
            "rollKod": "Gruppledare",
            "status": "",
            "typ": "partiuppdrag",
            "from": "2019-01-31",
            "tom": "",
            "uppgift": "Socialdemokraterna"
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2018-09-24",
            "tom": "2022-09-26",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2014-09-29",
            "tom": "2018-09-24",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2010-10-04",
            "tom": "2014-09-29",
            "uppgift": ""
          },
          {
            "organKod": "AU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Arbetsmarknadsutskottet"
          },
          {
            "organKod": "CU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Civilutskottet"
          },
          {
            "organKod": "FiU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Finansutskottet"
          },
          {
            "organKod": "JuU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Justitieutskottet"
          },
          {
            "organKod": "KrU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Kulturutskottet"
          },
          {
            "organKod": "MJU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Miljö- och jordbruksutskottet"
          },
          {
            "organKod": "NU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Näringsutskottet"
          },
          {
            "organKod": "SfU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Socialförsäkringsutskottet"
          },
          {
            "organKod": "SkU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Skatteutskottet"
          },
          {
            "organKod": "SoU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Socialutskottet"
          },
          {
            "organKod": "TU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Trafikutskottet"
          },
          {
            "organKod": "UbU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Utbildningsutskottet"
          },
          {
            "organKod": "FöU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Försvarsutskottet"
          },
          {
            "organKod": "KU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Konstitutionsutskottet"
          },
          {
            "organKod": "UU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Utrikesutskottet"
          },
          {
            "organKod": "AU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2018-10-02",
            "tom": "2019-02-08",
            "uppgift": "Arbetsmarknadsutskottet"
          },
          {
            "organKod": "AU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2014-10-07",
            "tom": "2018-09-24",
            "uppgift": "Arbetsmarknadsutskottet"
          },
          {
            "organKod": "JuU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2010-10-12",
            "tom": "2014-09-29",
            "uppgift": "Justitieutskottet"
          },
          {
            "organKod": "SfU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2010-10-12",
            "tom": "2014-09-29",
            "uppgift": "Socialförsäkringsutskottet"
          },
          {
            "organKod": "EUN",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-10-04",
            "uppgift": "EU-nämnden"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2021-10-13",
            "tom": "2022-10-31",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "KD",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2019-01-31",
            "tom": "2022-10-09",
            "uppgift": "Krigsdelegationen"
          },
          {
            "organKod": "RS",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2018-10-02",
            "tom": "2022-10-02",
            "uppgift": "Riksdagsstyrelsen"
          },
          {
            "organKod": "UN",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2019-01-31",
            "tom": "2022-10-02",
            "uppgift": "Utrikesnämnden"
          },
          {
            "organKod": "VB",
            "rollKod": "Vice ordförande",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2019-02-05",
            "tom": "2022-09-26",
            "uppgift": "Valberedningen"
          },
          {
            "organKod": "VB",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2018-09-24",
            "tom": "2022-09-26",
            "uppgift": "Valberedningen"
          },
          {
            "organKod": "RAN",
            "rollKod": "Ersättare",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2019-02-15",
            "tom": "2021-12-31",
            "uppgift": "Riksdagens ansvarsnämnd"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2020-10-14",
            "tom": "2021-10-13",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2019-10-02",
            "tom": "2020-10-14",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2019-01-31",
            "tom": "2019-10-02",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "LR",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2018-10-10",
            "tom": "2019-03-27",
            "uppgift": "Ledamotsrådet"
          },
          {
            "organKod": "RAN",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2016-01-01",
            "tom": "2018-12-31",
            "uppgift": "Riksdagens ansvarsnämnd"
          },
          {
            "organKod": "UN",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2018-10-02",
            "tom": "2018-10-09",
            "uppgift": "Utrikesnämnden"
          },
          {
            "organKod": "RS",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2018-04-10",
            "tom": "2018-10-02",
            "uppgift": "Riksdagsstyrelsen"
          },
          {
            "organKod": "VB",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2014-09-29",
            "tom": "2018-09-24",
            "uppgift": "Valberedningen"
          }
        ],
        "uppgifter": [
          {
            "kod": "Uppdrag inom riksdag och regering",
            "uppgift": "Riksdagsledamot 10-. Ledamot arbetsmarknadsutskottet 14-19. Suppleant justitieutskottet 10-14 och socialförsäkringsutskottet 10-14. Ledamot Utrikesnämnden 18- och krigsdelegationen 19-. Ledamot valberedningen 14-19 och vice ordförande 19- samt riksdagens ansvarsnämnd 16-18. Suppleant Nordiska rådets svenska delegation 19- och riksdagens ansvarsnämnd 19-.",
            "typ": "biografi"
          },
          {
            "kod": "Utbildning",
            "uppgift": "2-årig gymnasieskola.",
            "typ": "biografi"
          },
          {
            "kod": "Anställningar",
            "uppgift": "Kappahl i Kristianstad och Handelsanställdas förbund.",
            "typ": "biografi"
          },
          {
            "kod": "Bostadsort",
            "uppgift": "Kristianstad",
            "typ": "biografi"
          },
          {
            "kod": "Officiell e-postadress",
            "uppgift": "annelie.karlsson[på]riksdagen.se",
            "typ": "eadress"
          },
          {
            "kod": "sv",
            "uppgift": "Ombudsman.",
            "typ": "titlar"
          },
          {
            "kod": "en",
            "uppgift": "",
            "typ": "titlar"
          },
          {
            "kod": "KandiderarINastaVal",
            "uppgift": "true",
            "typ": "val"
          }
        ]
      },
      {
        "personId": "2eb5b5ce-2e8c-4063-a2c2-d03b50ff4c5d",
        "foddAr": "1985",
        "kon": "man",
        "efternamn": "Dibrani",
        "tilltalsnamn": "Adnan",
        "parti": "S",
        "valkrets": "Hallands län",
        "status": "Tjänstgörande riksdagsledamot",
        "bildUrl": "http://data.riksdagen.se/filarkiv/bilder/ledamot/2eb5b5ce-2e8c-4063-a2c2-d03b50ff4c5d_max.jpg",
        "uppdrag": [
          {
            "organKod": "RRR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2021-10-12",
            "tom": "2022-10-31",
            "uppgift": "Riksdagens råd för Riksrevisionen"
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2018-09-24",
            "tom": "2022-09-26",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2014-09-29",
            "tom": "2018-09-24",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2010-10-04",
            "tom": "2014-09-29",
            "uppgift": ""
          },
          {
            "organKod": "FiU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2018-10-02",
            "tom": "2022-09-26",
            "uppgift": "Finansutskottet"
          },
          {
            "organKod": "AU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Arbetsmarknadsutskottet"
          },
          {
            "organKod": "CU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Civilutskottet"
          },
          {
            "organKod": "JuU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Justitieutskottet"
          },
          {
            "organKod": "KrU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Kulturutskottet"
          },
          {
            "organKod": "NU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Näringsutskottet"
          },
          {
            "organKod": "SfU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Socialförsäkringsutskottet"
          },
          {
            "organKod": "SkU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Skatteutskottet"
          },
          {
            "organKod": "SoU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Socialutskottet"
          },
          {
            "organKod": "TU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Trafikutskottet"
          },
          {
            "organKod": "UbU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Utbildningsutskottet"
          },
          {
            "organKod": "UU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2018-10-02",
            "tom": "2022-09-26",
            "uppgift": "Utrikesutskottet"
          },
          {
            "organKod": "FöU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Försvarsutskottet"
          },
          {
            "organKod": "KU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Konstitutionsutskottet"
          },
          {
            "organKod": "MJU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-08-31",
            "uppgift": "Miljö- och jordbruksutskottet"
          },
          {
            "organKod": "FiU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2016-06-28",
            "tom": "2018-09-24",
            "uppgift": "Finansutskottet"
          },
          {
            "organKod": "SkU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2014-10-07",
            "tom": "2017-09-22",
            "uppgift": "Skatteutskottet"
          },
          {
            "organKod": "FiU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2014-10-07",
            "tom": "2016-06-28",
            "uppgift": "Finansutskottet"
          },
          {
            "organKod": "FiU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2012-03-23",
            "tom": "2014-09-29",
            "uppgift": "Finansutskottet"
          },
          {
            "organKod": "UbU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2010-10-12",
            "tom": "2014-09-29",
            "uppgift": "Utbildningsutskottet"
          },
          {
            "organKod": "UU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2012-06-20",
            "tom": "2014-09-29",
            "uppgift": "Utrikesutskottet"
          },
          {
            "organKod": "NU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2010-10-12",
            "tom": "2013-10-03",
            "uppgift": "Näringsutskottet"
          },
          {
            "organKod": "EUN",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-10-04",
            "uppgift": "EU-nämnden"
          },
          {
            "organKod": "ER",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2018-11-01",
            "tom": "2022-10-31",
            "uppgift": "Europarådets svenska delegation"
          },
          {
            "organKod": "PA-UfM",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2014-10-28",
            "tom": "2018-10-28",
            "uppgift": "Riksdagens delegation till den parlamentariska församlingen för Unionen för Medelhavet"
          },
          {
            "organKod": "ÖN",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2015-01-13",
            "tom": "2018-10-09",
            "uppgift": "Riksdagens överklagandenämnd"
          }
        ],
        "uppgifter": [
          {
            "kod": "Uppdrag inom riksdag och regering",
            "uppgift": "Riksdagsledamot 10-. Ledamot skatteutskottet 14-17 och finansutskottet 18-. Suppleant utbildningsutskottet 10-14, näringsutskottet 10-13, finansutskottet 12-18 och utrikesutskottet 12-14 och 18-. Suppleant riksdagens delegation till den parlamentariska församlingen för unionen för Medelhavet 14-18, riksdagens överklagandenämnd 15-18 och Europarådets svenska delegation 18-.",
            "typ": "biografi"
          },
          {
            "kod": "Utbildning",
            "uppgift": "Gymnasieskola, Peder Skrivares skola i Varberg, slutår 04. Ekonomi/politik, Internationella Handelshögskolan i Jönköping.",
            "typ": "biografi"
          },
          {
            "kod": "Anställningar",
            "uppgift": "Kundtjänst/kassa, Swedbank 07. Privatrådgivare, Varbergs Sparbank 08.",
            "typ": "biografi"
          },
          {
            "kod": "Uppdrag inom statliga myndigheter m.m.",
            "uppgift": "Ledamot, ESV.",
            "typ": "biografi"
          },
          {
            "kod": "Bostadsort",
            "uppgift": "Varberg",
            "typ": "biografi"
          },
          {
            "kod": "Officiell e-postadress",
            "uppgift": "adnan.dibrani[på]riksdagen.se",
            "typ": "eadress"
          },
          {
            "kod": "Tjänstetelefon",
            "uppgift": "65907",
            "typ": "telefonnummer"
          },
          {
            "kod": "sv",
            "uppgift": "Banktjänsteman.",
            "typ": "titlar"
          },
          {
            "kod": "en",
            "uppgift": "",
            "typ": "titlar"
          },
          {
            "kod": "KandiderarINastaVal",
            "uppgift": "true",
            "typ": "val"
          }
        ]
      },
      {
        "personId": "728bd800-61df-4b9a-86ed-1fe3d8479f14",
        "foddAr": "1960",
        "kon": "man",
        "efternamn": "Johansson",
        "tilltalsnamn": "Ola",
        "parti": "C",
        "valkrets": "Hallands län",
        "status": "Tjänstgörande riksdagsledamot",
        "bildUrl": "http://data.riksdagen.se/filarkiv/bilder/ledamot/728bd800-61df-4b9a-86ed-1fe3d8479f14_max.jpg",
        "uppdrag": [
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2018-09-24",
            "tom": "2022-09-26",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2014-09-29",
            "tom": "2018-09-24",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2014-04-18",
            "tom": "2014-09-29",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Ledig",
            "typ": "kammaruppdrag",
            "from": "2014-03-10",
            "tom": "2014-04-17",
            "uppgift": "Helén Andersson 2014-03-10 - 2014-04-17  Sjukledighet"
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2010-10-04",
            "tom": "2014-03-09",
            "uppgift": ""
          },
          {
            "organKod": "CU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2018-10-02",
            "tom": "2022-09-26",
            "uppgift": "Civilutskottet"
          },
          {
            "organKod": "AU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Arbetsmarknadsutskottet"
          },
          {
            "organKod": "FiU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Finansutskottet"
          },
          {
            "organKod": "JuU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Justitieutskottet"
          },
          {
            "organKod": "KrU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Kulturutskottet"
          },
          {
            "organKod": "MJU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Miljö- och jordbruksutskottet"
          },
          {
            "organKod": "NU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Näringsutskottet"
          },
          {
            "organKod": "SfU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Socialförsäkringsutskottet"
          },
          {
            "organKod": "SkU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Skatteutskottet"
          },
          {
            "organKod": "SoU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Socialutskottet"
          },
          {
            "organKod": "TU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Trafikutskottet"
          },
          {
            "organKod": "UbU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Utbildningsutskottet"
          },
          {
            "organKod": "FöU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Försvarsutskottet"
          },
          {
            "organKod": "KU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Konstitutionsutskottet"
          },
          {
            "organKod": "UU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Utrikesutskottet"
          },
          {
            "organKod": "CU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2014-10-07",
            "tom": "2018-09-24",
            "uppgift": "Civilutskottet"
          },
          {
            "organKod": "UU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2014-10-07",
            "tom": "2018-09-24",
            "uppgift": "Utrikesutskottet"
          },
          {
            "organKod": "CU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2011-10-14",
            "tom": "2014-09-29",
            "uppgift": "Civilutskottet"
          },
          {
            "organKod": "SoU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2012-09-06",
            "tom": "2014-09-29",
            "uppgift": "Socialutskottet"
          },
          {
            "organKod": "SoU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2011-10-21",
            "tom": "2012-09-05",
            "uppgift": "Socialutskottet"
          },
          {
            "organKod": "TU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2011-10-21",
            "tom": "2012-09-05",
            "uppgift": "Trafikutskottet"
          },
          {
            "organKod": "SoU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2011-06-08",
            "tom": "2011-10-20",
            "uppgift": "Socialutskottet"
          },
          {
            "organKod": "TU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2010-10-12",
            "tom": "2011-10-20",
            "uppgift": "Trafikutskottet"
          },
          {
            "organKod": "CU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2010-10-12",
            "tom": "2011-10-13",
            "uppgift": "Civilutskottet"
          },
          {
            "organKod": "CKrU",
            "rollKod": "Deputerad",
            "status": "",
            "typ": "uppdrag",
            "from": "2018-03-13",
            "tom": "2018-05-24",
            "uppgift": "Sammansatta civil- och kulturutskottet"
          },
          {
            "organKod": "EUN",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-10-04",
            "uppgift": "EU-nämnden"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2021-10-13",
            "tom": "2022-10-31",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "VB",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2021-01-21",
            "tom": "2022-09-26",
            "uppgift": "Valberedningen"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2020-10-14",
            "tom": "2021-10-13",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2019-10-02",
            "tom": "2020-10-14",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2018-10-09",
            "tom": "2019-10-02",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2015-10-01",
            "tom": "2016-09-29",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "NR",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2014-10-07",
            "tom": "2015-10-01",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2015-10-01",
            "tom": "2015-10-01",
            "uppgift": "Nordiska rådets svenska delegation"
          }
        ],
        "uppgifter": [
          {
            "kod": "Kommunala uppdrag",
            "uppgift": "Kommunfullmäktig, Kungsbacka kommun, 94-98 och 02-10, ersättare 98-02. Ledamot, kommunstyrelsen Kungsbacka 06-10, ersättare 98-06. Kommunalråd, Kungsbacka kommun 06-10. Ledamot, nämnden för förskola och grundskola 02-06. Ordförande, nämnden för service 06-10. Ledamot, lokala säkerhetsnämnden vid Ringhals 07-11. Ersättare, utbildnings- och kulturnämnden, landstinget i Halland 91-94. Ersättare, beredningen för utbildningsfrågor, Sveriges Kommuner & Landsting 07-11.",
            "typ": "biografi"
          },
          {
            "kod": "Uppdrag inom förenings- och näringsliv",
            "uppgift": "Ledamot, distriktsstyrelsen, Centerns Ungdomsförbund i Halland 79-85. Ordförande, Centerns Ungdomsförbund i Halland 82-85. Ersättare, förbundsstyrelsen, Centerns Ungdomsförbund i Halland 84-86. Förbundsordförande, Bygdegårdarnas Riksförbund 11-18. Vice ordförande, Centerpartiet i Halland 08-14. Styrelsesuppleant, Handbollsklubben Aranäs 15-17. ",
            "typ": "biografi"
          },
          {
            "kod": "Litteratur",
            "uppgift": "Ett större antal verkstadshandböcker, reservdelskataloger och servicemeddelanden framtagna för Svensk Fordonsindustri 84-96. Gästkrönikör i Hallands Nyheter.",
            "typ": "biografi"
          },
          {
            "kod": "Uppdrag inom riksdag och regering",
            "uppgift": "Riksdagsledamot 10-. Ledamot civilutskottet 11-. Suppleant civilutskottet 10-11, socialutskottet 10-14, trafikutskottet 10-12 och utrikesutskottet 14-. Ledamot Nordiska rådets svenska delegation 14-15. Suppleant Nordiska rådets svenska delegation 15-16.",
            "typ": "biografi"
          },
          {
            "kod": "Föräldrar",
            "uppgift": "Lantbrukarna Rune Johansson och Gunnel Johansson.",
            "typ": "biografi"
          },
          {
            "kod": "Utbildning",
            "uppgift": "Gymnasieskola, Falkenberg, slutår 78. Högre specialkurs, verktygsmakare, Hässleholm, slutår 79. Reklamkommunikation, RMI Berghs 88. Chefs- och ledarskap, Enator 96. ",
            "typ": "biografi"
          },
          {
            "kod": "Anställningar",
            "uppgift": "NC-operatör, Kungsbacka mekaniska verkstad 80-84. Teknisk illustratör, Volvo Reservdelar AB 84-88. Teknisk skribent, Volvo Penta AB 88-91. Konsult, Projektgruppen i Göteborg AB 91-94. Konsult, Telub Inforum, Celsius Inforum 94-96. Kontorschef, Enator, Tieto Enator, Aerotechtelub 96-03. Key Account Manager, Combitech AB 03-. ",
            "typ": "biografi"
          },
          {
            "kod": "Officiell e-postadress",
            "uppgift": "ola.johansson[på]riksdagen.se",
            "typ": "eadress"
          },
          {
            "kod": "Tjänstetelefon",
            "uppgift": "65720",
            "typ": "telefonnummer"
          },
          {
            "kod": "sv",
            "uppgift": "Key Account Manager",
            "typ": "titlar"
          },
          {
            "kod": "en",
            "uppgift": "",
            "typ": "titlar"
          },
          {
            "kod": "KandiderarINastaVal",
            "uppgift": "true",
            "typ": "val"
          }
        ]
      },
      {
        "personId": "f965c024-1cd1-4a10-bff1-7615c8b1bde4",
        "foddAr": "1963",
        "kon": "kvinna",
        "efternamn": "Hartzell",
        "tilltalsnamn": "Åsa",
        "parti": "M",
        "valkrets": "Göteborgs kommun",
        "status": "Tjänstgörande ersättare",
        "bildUrl": "http://data.riksdagen.se/filarkiv/bilder/ledamot/f965c024-1cd1-4a10-bff1-7615c8b1bde4_max.jpg",
        "uppdrag": [
          {
            "organKod": "kam",
            "rollKod": "Ersättare",
            "status": "Ersättare",
            "typ": "kammaruppdrag",
            "from": "2021-09-01",
            "tom": "2021-11-30",
            "uppgift": "David Josefsson"
          },
          {
            "organKod": "kam",
            "rollKod": "Ersättare",
            "status": "Ersättare",
            "typ": "kammaruppdrag",
            "from": "2019-02-25",
            "tom": "2019-05-10",
            "uppgift": "Lars Hjälmered"
          },
          {
            "organKod": "CU",
            "rollKod": "Extra suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2021-09-22",
            "tom": "2021-11-30",
            "uppgift": "Civilutskottet"
          },
          {
            "organKod": "NU",
            "rollKod": "Extra suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2019-02-25",
            "tom": "2019-05-10",
            "uppgift": "Näringsutskottet"
          }
        ],
        "uppgifter": [
          {
            "kod": "Uppdrag inom riksdag och regering",
            "uppgift": "Riksdagsledamot 19 (ersättare 190225-190510). Extra suppleant näringsutskottet 19.",
            "typ": "biografi"
          },
          {
            "kod": "Officiell e-postadress",
            "uppgift": "asa.hartzell[på]riksdagen.se",
            "typ": "eadress"
          }
        ]
      },
      {
        "personId": "ca44a628-ee7f-4760-a56a-6ac195740ba0",
        "foddAr": "1973",
        "kon": "kvinna",
        "efternamn": "Karlsson",
        "tilltalsnamn": "Ulrika",
        "parti": "M",
        "valkrets": "Uppsala län",
        "status": "Tjänstgörande ersättare",
        "bildUrl": "http://data.riksdagen.se/filarkiv/bilder/ledamot/ca44a628-ee7f-4760-a56a-6ac195740ba0_max.jpg",
        "uppdrag": [
          {
            "organKod": "kam",
            "rollKod": "Ersättare",
            "status": "Ersättare",
            "typ": "kammaruppdrag",
            "from": "2021-04-26",
            "tom": "2022-01-09",
            "uppgift": "Marta Obminska"
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2017-06-19",
            "tom": "2018-09-24",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Ledig",
            "typ": "kammaruppdrag",
            "from": "2017-05-18",
            "tom": "2017-06-18",
            "uppgift": "Gunnar Hedberg 2017-05-18 - 2017-06-18  Sjukledighet"
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2015-05-31",
            "tom": "2017-05-17",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Ledig",
            "typ": "kammaruppdrag",
            "from": "2014-12-01",
            "tom": "2015-05-30",
            "uppgift": "Gunnar Hedberg 2014-12-01 - 2015-05-30  Föräldraledighet"
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2014-09-29",
            "tom": "2014-11-30",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2014-04-18",
            "tom": "2014-09-29",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Ledig",
            "typ": "kammaruppdrag",
            "from": "2014-01-13",
            "tom": "2014-04-17",
            "uppgift": "Gunnar Hedberg 2014-01-13 - 2014-04-17  Föräldraledighet"
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2010-10-04",
            "tom": "2014-01-12",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2006-10-02",
            "tom": "2010-10-04",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Ersättare",
            "status": "Ersättare",
            "typ": "kammaruppdrag",
            "from": "2004-09-17",
            "tom": "2004-10-31",
            "uppgift": "Per Bill"
          },
          {
            "organKod": "KU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2021-05-06",
            "tom": "2022-01-09",
            "uppgift": "Konstitutionsutskottet"
          },
          {
            "organKod": "UU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2014-10-07",
            "tom": "2018-09-24",
            "uppgift": "Utrikesutskottet"
          },
          {
            "organKod": "CU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2014-10-07",
            "tom": "2017-05-02",
            "uppgift": "Civilutskottet"
          },
          {
            "organKod": "CU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2010-10-12",
            "tom": "2014-09-29",
            "uppgift": "Civilutskottet"
          },
          {
            "organKod": "UU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2013-02-13",
            "tom": "2014-09-29",
            "uppgift": "Utrikesutskottet"
          },
          {
            "organKod": "JuU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2010-10-12",
            "tom": "2012-12-02",
            "uppgift": "Justitieutskottet"
          },
          {
            "organKod": "JuU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2006-10-10",
            "tom": "2010-10-04",
            "uppgift": "Justitieutskottet"
          },
          {
            "organKod": "CU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2006-10-10",
            "tom": "2010-10-04",
            "uppgift": "Civilutskottet"
          },
          {
            "organKod": "NU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2004-09-23",
            "tom": "2004-10-31",
            "uppgift": "Näringsutskottet"
          },
          {
            "organKod": "UbU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2004-09-23",
            "tom": "2004-10-31",
            "uppgift": "Utbildningsutskottet"
          },
          {
            "organKod": "JuSoU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2008-03-13",
            "tom": "2008-05-07",
            "uppgift": "Sammansatta justitie- och socialutskottet"
          },
          {
            "organKod": "EUN",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2017-12-19",
            "tom": "2018-09-24",
            "uppgift": "EU-nämnden"
          },
          {
            "organKod": "EUN",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2014-10-07",
            "tom": "2017-12-19",
            "uppgift": "EU-nämnden"
          },
          {
            "organKod": "EUN",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2012-12-03",
            "tom": "2014-10-07",
            "uppgift": "EU-nämnden"
          },
          {
            "organKod": "IPU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2014-10-28",
            "tom": "2018-09-24",
            "uppgift": "Riksdagens delegation till Interparlamentariska unionen"
          },
          {
            "organKod": "PA-UfM",
            "rollKod": "Vice ordförande",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2014-11-20",
            "tom": "2018-01-16",
            "uppgift": "Riksdagens delegation till den parlamentariska församlingen för Unionen för Medelhavet"
          },
          {
            "organKod": "PA-UfM",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2014-10-28",
            "tom": "2014-11-20",
            "uppgift": "Riksdagens delegation till den parlamentariska församlingen för Unionen för Medelhavet"
          },
          {
            "organKod": "ER",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2013-03-23",
            "tom": "2014-11-01",
            "uppgift": "Europarådets svenska delegation"
          },
          {
            "organKod": "PA-UfM",
            "rollKod": "Ordförande",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2013-05-14",
            "tom": "2014-10-28",
            "uppgift": "Riksdagens delegation till den parlamentariska församlingen för Unionen för Medelhavet"
          },
          {
            "organKod": "IPU",
            "rollKod": "Andre vice ordförande",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2010-11-17",
            "tom": "2014-10-28",
            "uppgift": "Riksdagens delegation till Interparlamentariska unionen"
          },
          {
            "organKod": "ÖN",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2010-10-19",
            "tom": "2014-10-14",
            "uppgift": "Riksdagens överklagandenämnd"
          },
          {
            "organKod": "PA-UfM",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2013-04-24",
            "tom": "2013-05-13",
            "uppgift": "Riksdagens delegation till den parlamentariska församlingen för Unionen för Medelhavet"
          },
          {
            "organKod": "ÖN",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2006-10-17",
            "tom": "2010-10-19",
            "uppgift": "Riksdagens överklagandenämnd"
          }
        ],
        "uppgifter": [
          {
            "kod": "Uppdrag inom riksdag och regering",
            "uppgift": "Riksdagsledamot 04 (ersättare 040917-041031) och 06-. Ledamot justitieutskottet 06-12. Suppleant utbildningsutskottet 04, näringsutskottet 04, civilutskottet 06-, sammansatta justitie- och socialutskottet 08 och utrikesutskottet 13-. Ledamot riksdagens överklagandenämnd 06-14, interparlamentariska unionens svenska delegation 14-, 2:e vice ordförande 10-14. Ledamot och gruppledare EU-nämnden 12-. Ledamot Europarådets svenska delegation 13-14, riksdagens delegation till den parlamentariska församlingen för Unionen för Medelhavet 14, ordförande 13-14 och vice ordförande 14-. President European Parliamentary Forum (EPF) 15-.",
            "typ": "biografi"
          },
          {
            "kod": "Föräldrar",
            "uppgift": "Börje Karlsson och Barbro Karlsson.",
            "typ": "biografi"
          },
          {
            "kod": "Utbildning",
            "uppgift": "Gymnasieskola, ekonomisk linje i Örebro, slutår 93. High School, Silver City New Mexico, USA. Högskolestudier, bl.a. rättsvetenskap, statsvetenskap och engelska, Örebro. Jur. kand.-programmet, Uppsala universitet.",
            "typ": "biografi"
          },
          {
            "kod": "Anställningar",
            "uppgift": "Butiksbiträde. Telemarketingföretag. Fabrikskontor. Kommunikationskonsult. Utredare. Redaktör, Svensk Tidskrift.",
            "typ": "biografi"
          },
          {
            "kod": "Uppdrag inom statliga myndigheter m.m.",
            "uppgift": "Ledamot, Kriminalvårdsnämnden 09-, Yttrandefrihetskommittén 08-, Gentekniknämnden 11-, Centrum för polisforskning vid Uppsala universitet 09- och Polisstyrelsen i Uppsala län 11-.",
            "typ": "biografi"
          },
          {
            "kod": "Kommunala uppdrag",
            "uppgift": "Ledamot, Vasa kommundelsnämnd i Örebro. Ledamot, utskottet för jämställdhet 02. Landstingsfullmäktig, Uppsala län 98-09. Ledamot, landstingsstyrelsen 98-02, ersättare 98-02. Landstingsråd 02. Ledamot, kultur- och utbildningsnämnden 99-00, skattenämnden 99-01 och hälso- och sjukvårdsstyrelsen 03-06. Ledamot, C-framåt Uppsala län 03-04. Ersättare, Upplandsstiftelsens stämma 98-02 och Landstingsförbundets kongress 99-02. Ledamot, Demokrati- och självstyrelseberedningen, Sveriges Kommuner och Landsting 03-07.",
            "typ": "biografi"
          },
          {
            "kod": "Uppdrag inom förenings- och näringsliv",
            "uppgift": "Ledamot, MUF:s förbundsstyrelse 98-02, Moderata kommunala samrådsgruppen 98-02. Vice förbundsordförande, Moderaterna i Uppsala län 02-06. Ordförande, Uppsala studentkårsfullmäktige 99-01. Ledamot, Uppsala universitets disciplinnämnd 00-01. Distriktsordförande, MUF Örebro län 95-96. Vice distriktsordförande, MUF Uppsala län 97-98. Ledamot, Arvid Lindmanfonden 06-10. Styrelseledamot, Imint AB 09-10.",
            "typ": "biografi"
          },
          {
            "kod": "Webbsida",
            "uppgift": "http://moderaterna.se/uppsala/ulrika-karlsson",
            "typ": "eadress"
          },
          {
            "kod": "Övriga webbsidor",
            "uppgift": "http://www.facebook.com/ulrika.karlsson",
            "typ": "eadress"
          },
          {
            "kod": "Officiell e-postadress",
            "uppgift": "ulrika.karlsson[på]riksdagen.se",
            "typ": "eadress"
          },
          {
            "kod": "sv",
            "uppgift": "Redaktör",
            "typ": "titlar"
          },
          {
            "kod": "en",
            "uppgift": "",
            "typ": "titlar"
          },
          {
            "kod": "KandiderarINastaVal",
            "uppgift": "true",
            "typ": "val"
          }
        ]
      },
      {
        "personId": "5d1ac61d-4464-41a4-bae0-42ea3782cba8",
        "foddAr": "1980",
        "kon": "man",
        "efternamn": "Widegren",
        "tilltalsnamn": "John",
        "parti": "M",
        "valkrets": "Östergötlands län",
        "status": "Tjänstgörande talmansersättare",
        "bildUrl": "http://data.riksdagen.se/filarkiv/bilder/ledamot/5d1ac61d-4464-41a4-bae0-42ea3782cba8_max.jpg",
        "uppdrag": [
          {
            "organKod": "kam",
            "rollKod": "Talmansersättare",
            "status": "Ersättare",
            "typ": "kammaruppdrag",
            "from": "2018-09-24",
            "tom": "2022-09-26",
            "uppgift": "Andreas Norlén"
          },
          {
            "organKod": "kam",
            "rollKod": "Ersättare",
            "status": "Ersättare",
            "typ": "kammaruppdrag",
            "from": "2017-09-11",
            "tom": "2017-12-31",
            "uppgift": "Andreas Norlén"
          },
          {
            "organKod": "MJU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2019-02-13",
            "tom": "2022-09-26",
            "uppgift": "Miljö- och jordbruksutskottet"
          },
          {
            "organKod": "AU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Arbetsmarknadsutskottet"
          },
          {
            "organKod": "CU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Civilutskottet"
          },
          {
            "organKod": "FiU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Finansutskottet"
          },
          {
            "organKod": "JuU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Justitieutskottet"
          },
          {
            "organKod": "KrU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Kulturutskottet"
          },
          {
            "organKod": "NU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Näringsutskottet"
          },
          {
            "organKod": "SfU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Socialförsäkringsutskottet"
          },
          {
            "organKod": "SkU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Skatteutskottet"
          },
          {
            "organKod": "SoU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Socialutskottet"
          },
          {
            "organKod": "TU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Trafikutskottet"
          },
          {
            "organKod": "UbU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Utbildningsutskottet"
          },
          {
            "organKod": "FöU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Försvarsutskottet"
          },
          {
            "organKod": "KU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Konstitutionsutskottet"
          },
          {
            "organKod": "UU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Utrikesutskottet"
          },
          {
            "organKod": "KU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2018-10-02",
            "tom": "2019-02-13",
            "uppgift": "Konstitutionsutskottet"
          },
          {
            "organKod": "KU",
            "rollKod": "Extra suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2017-09-11",
            "tom": "2017-12-31",
            "uppgift": "Konstitutionsutskottet"
          },
          {
            "organKod": "EUN",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2019-02-27",
            "tom": "2022-10-04",
            "uppgift": "EU-nämnden"
          }
        ],
        "uppgifter": [
          {
            "kod": "Uppdrag inom riksdag och regering",
            "uppgift": "Riksdagsledamot 17 (ersättare 170911-171231) och 18- (talmansersättare 180924-). Ledamot miljö- och jordbruksutskottet 18-. Extra suppleant konstitutionsutskottet 17 och suppleant 18-. Suppleant EU-nämnden 18-.",
            "typ": "biografi"
          },
          {
            "kod": "Föräldrar",
            "uppgift": "Lantbrukaren Hans Widegren och Lynn Widegren, f. Martinsson.",
            "typ": "biografi"
          },
          {
            "kod": "Utbildning",
            "uppgift": "Gymnasieskola, naturvetenskapligt program, Kungshögaskolan, Mjölby, slutår 99. Grundkurs Lantbruk, Vretaskolan, Linköping 01. Lantmästarprogrammet, Sveriges lantbruksuniversitet, Alnarp 04. ",
            "typ": "biografi"
          },
          {
            "kod": "Anställningar",
            "uppgift": "Lantarbetare, Walla säteri, Ödeshög 99-02 och 04-11. Lantbrukare, Walla säteri och Sättra, Ödeshög 11-.",
            "typ": "biografi"
          },
          {
            "kod": "Uppdrag inom statliga myndigheter m.m.",
            "uppgift": "Ledamot, Viltförvaltningsdelegationen Östergötland 15-.",
            "typ": "biografi"
          },
          {
            "kod": "Kommunala uppdrag",
            "uppgift": "Kommunfullmäktig, Ödeshög 10-14 och ersättare 06-10. Ledamot, kommunstyrelsen 06-14, ordförande 10-14. Ledamot, teknik-, trafik- och räddningsutskottet 06-10. Gruppledare kommunfullmäktige 08-14.",
            "typ": "biografi"
          },
          {
            "kod": "Uppdrag inom förenings- och näringsliv",
            "uppgift": "Ledamot, Hushållningssällskapet Östergötland 17-. Ledamot, Moderaternas förbundsstyrelse Östergötland 10-19.",
            "typ": "biografi"
          },
          {
            "kod": "Officiell e-postadress",
            "uppgift": "john.widegren[på]riksdagen.se",
            "typ": "eadress"
          },
          {
            "kod": "sv",
            "uppgift": "Bonde/Lantmästare.",
            "typ": "titlar"
          },
          {
            "kod": "en",
            "uppgift": "",
            "typ": "titlar"
          },
          {
            "kod": "KandiderarINastaVal",
            "uppgift": "true",
            "typ": "val"
          }
        ]
      },
      {
        "personId": "8a611e75-37ca-434d-9767-9fb3b60ea82f",
        "foddAr": "1973",
        "kon": "kvinna",
        "efternamn": "Widegren",
        "tilltalsnamn": "Cecilia",
        "parti": "M",
        "valkrets": "Västra Götalands läns östra",
        "status": "Tjänstgörande riksdagsledamot",
        "bildUrl": "http://data.riksdagen.se/filarkiv/bilder/ledamot/8a611e75-37ca-434d-9767-9fb3b60ea82f_max.jpg",
        "uppdrag": [
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2018-09-24",
            "tom": "2022-09-26",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2014-09-29",
            "tom": "2018-09-24",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2010-10-04",
            "tom": "2014-09-29",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2006-10-02",
            "tom": "2010-10-04",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2002-09-30",
            "tom": "2006-10-02",
            "uppgift": ""
          },
          {
            "organKod": "AU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Arbetsmarknadsutskottet"
          },
          {
            "organKod": "CU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Civilutskottet"
          },
          {
            "organKod": "FiU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Finansutskottet"
          },
          {
            "organKod": "JuU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Justitieutskottet"
          },
          {
            "organKod": "KrU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Kulturutskottet"
          },
          {
            "organKod": "MJU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Miljö- och jordbruksutskottet"
          },
          {
            "organKod": "NU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Näringsutskottet"
          },
          {
            "organKod": "SfU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Socialförsäkringsutskottet"
          },
          {
            "organKod": "SkU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Skatteutskottet"
          },
          {
            "organKod": "SoU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Socialutskottet"
          },
          {
            "organKod": "TU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Trafikutskottet"
          },
          {
            "organKod": "UbU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Utbildningsutskottet"
          },
          {
            "organKod": "UU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2019-09-20",
            "tom": "2022-09-26",
            "uppgift": "Utrikesutskottet"
          },
          {
            "organKod": "FöU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Försvarsutskottet"
          },
          {
            "organKod": "KU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Konstitutionsutskottet"
          },
          {
            "organKod": "UU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2019-02-27",
            "tom": "2019-09-20",
            "uppgift": "Utrikesutskottet"
          },
          {
            "organKod": "SkU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2018-10-02",
            "tom": "2019-02-13",
            "uppgift": "Skatteutskottet"
          },
          {
            "organKod": "SkU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2017-10-13",
            "tom": "2018-09-24",
            "uppgift": "Skatteutskottet"
          },
          {
            "organKod": "SoU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2014-10-07",
            "tom": "2017-10-13",
            "uppgift": "Socialutskottet"
          },
          {
            "organKod": "FöU",
            "rollKod": "Vice ordförande",
            "status": "",
            "typ": "uppdrag",
            "from": "2010-10-12",
            "tom": "2014-09-29",
            "uppgift": "Försvarsutskottet"
          },
          {
            "organKod": "FöU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2010-10-12",
            "tom": "2010-10-12",
            "uppgift": "Försvarsutskottet"
          },
          {
            "organKod": "SoU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2006-10-10",
            "tom": "2010-10-04",
            "uppgift": "Socialutskottet"
          },
          {
            "organKod": "MJU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2006-12-06",
            "tom": "2010-10-04",
            "uppgift": "Miljö- och jordbruksutskottet"
          },
          {
            "organKod": "FiU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2005-10-27",
            "tom": "2006-10-02",
            "uppgift": "Finansutskottet"
          },
          {
            "organKod": "MJU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2002-10-08",
            "tom": "2006-10-02",
            "uppgift": "Miljö- och jordbruksutskottet"
          },
          {
            "organKod": "FiU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2002-10-08",
            "tom": "2005-10-26",
            "uppgift": "Finansutskottet"
          },
          {
            "organKod": "SkU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2002-10-08",
            "tom": "2002-12-31",
            "uppgift": "Skatteutskottet"
          },
          {
            "organKod": "UFöU",
            "rollKod": "Vice ordförande",
            "status": "",
            "typ": "uppdrag",
            "from": "2014-04-15",
            "tom": "2014-06-12",
            "uppgift": "Sammansatta utrikes- och försvarsutskottet"
          },
          {
            "organKod": "UFöU",
            "rollKod": "Deputerad",
            "status": "",
            "typ": "uppdrag",
            "from": "2013-11-26",
            "tom": "2013-12-17",
            "uppgift": "Sammansatta utrikes- och försvarsutskottet"
          },
          {
            "organKod": "UFöU",
            "rollKod": "Vice ordförande",
            "status": "",
            "typ": "uppdrag",
            "from": "2013-04-23",
            "tom": "2013-06-18",
            "uppgift": "Sammansatta utrikes- och försvarsutskottet"
          },
          {
            "organKod": "UFöU",
            "rollKod": "Deputerad",
            "status": "",
            "typ": "uppdrag",
            "from": "2013-02-21",
            "tom": "2013-03-06",
            "uppgift": "Sammansatta utrikes- och försvarsutskottet"
          },
          {
            "organKod": "UFöU",
            "rollKod": "Vice ordförande",
            "status": "",
            "typ": "uppdrag",
            "from": "2012-11-27",
            "tom": "2012-12-19",
            "uppgift": "Sammansatta utrikes- och försvarsutskottet"
          },
          {
            "organKod": "UFöU",
            "rollKod": "Deputerad",
            "status": "",
            "typ": "uppdrag",
            "from": "2011-11-24",
            "tom": "2011-12-14",
            "uppgift": "Sammansatta utrikes- och försvarsutskottet"
          },
          {
            "organKod": "UFöU",
            "rollKod": "Vice ordförande",
            "status": "",
            "typ": "uppdrag",
            "from": "2011-09-20",
            "tom": "2011-09-21",
            "uppgift": "Sammansatta utrikes- och försvarsutskottet"
          },
          {
            "organKod": "UFöU",
            "rollKod": "Deputerad",
            "status": "",
            "typ": "uppdrag",
            "from": "2011-06-16",
            "tom": "2011-06-17",
            "uppgift": "Sammansatta utrikes- och försvarsutskottet"
          },
          {
            "organKod": "UFöU",
            "rollKod": "Vice ordförande",
            "status": "",
            "typ": "uppdrag",
            "from": "2011-03-31",
            "tom": "2011-04-01",
            "uppgift": "Sammansatta utrikes- och försvarsutskottet"
          },
          {
            "organKod": "UFöU",
            "rollKod": "Deputerad",
            "status": "",
            "typ": "uppdrag",
            "from": "2010-11-23",
            "tom": "2010-12-15",
            "uppgift": "Sammansatta utrikes- och försvarsutskottet"
          },
          {
            "organKod": "JuSoU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2008-01-29",
            "tom": "2008-05-07",
            "uppgift": "Sammansatta justitie- och socialutskottet"
          },
          {
            "organKod": "EUN",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-10-04",
            "uppgift": "EU-nämnden"
          },
          {
            "organKod": "IPU",
            "rollKod": "Ordförande",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2020-11-10",
            "tom": "2022-10-24",
            "uppgift": "Riksdagens delegation till Interparlamentariska unionen"
          },
          {
            "organKod": "IPU",
            "rollKod": "Ordförande",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2018-10-24",
            "tom": "2020-11-09",
            "uppgift": "Riksdagens delegation till Interparlamentariska unionen"
          },
          {
            "organKod": "KD",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2014-10-14",
            "tom": "2018-10-09",
            "uppgift": "Krigsdelegationen"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2017-09-28",
            "tom": "2018-10-09",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "RS",
            "rollKod": "Ersättare",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2014-10-07",
            "tom": "2018-10-02",
            "uppgift": "Riksdagsstyrelsen"
          },
          {
            "organKod": "VB",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2014-09-29",
            "tom": "2018-09-24",
            "uppgift": "Valberedningen"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2016-09-29",
            "tom": "2017-09-28",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2015-10-01",
            "tom": "2016-09-29",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2014-10-07",
            "tom": "2015-10-01",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "NATO",
            "rollKod": "Ordförande",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2012-05-10",
            "tom": "2014-10-28",
            "uppgift": "Riksdagens delegation till Natos parlamentariska församling"
          },
          {
            "organKod": "KD",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2010-10-19",
            "tom": "2014-10-14",
            "uppgift": "Krigsdelegationen"
          },
          {
            "organKod": "RS",
            "rollKod": "Ersättare",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2010-10-12",
            "tom": "2014-10-07",
            "uppgift": "Riksdagsstyrelsen"
          },
          {
            "organKod": "UN",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2010-10-12",
            "tom": "2014-10-07",
            "uppgift": "Utrikesnämnden"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2013-09-17",
            "tom": "2014-09-29",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2012-10-04",
            "tom": "2013-09-16",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2011-10-12",
            "tom": "2012-09-18",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "NATO",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2010-11-17",
            "tom": "2012-05-09",
            "uppgift": "Riksdagens delegation till Natos parlamentariska församling"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2010-10-19",
            "tom": "2011-09-15",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2006-10-17",
            "tom": "2010-10-04",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2002-11-28",
            "tom": "2006-10-02",
            "uppgift": "Nordiska rådets svenska delegation"
          }
        ],
        "uppgifter": [
          {
            "kod": "Anställningar",
            "uppgift": "Arrendator 91-93. Politisk sekreterare 93-95. Handläggare 95-97. Regionråd, Västra Götalands län 98-02.",
            "typ": "biografi"
          },
          {
            "kod": "Uppdrag inom statliga myndigheter m.m.",
            "uppgift": "Styrelseledamot, Länsstyrelsen i Västra Götalands län 02-10, Stiftelsen för institutet för vatten- och luftvårdsforskning 03-06 och Statens jordbruksverk 05-08. Ledamot, regeringens jämställdhetsråd 95-97 och Socialstyrelsens rättsliga råd 08-.",
            "typ": "biografi"
          },
          {
            "kod": "Kommunala uppdrag",
            "uppgift": "Kommunfullmäktig, Vara 02-. Landstingsfullmäktig, Skaraborgs län 94-98. Regionfullmäktig, Region Västra Götaland 98-06. Ledamot, regionstyrelsen 98-02, vice ordförande 98-99 och 00-02, ordförande 99-00. Ledamot, pensionärsrådet, vice ordförande 01-02 och politiska kommittén 02. Styrelseledamot, Landstingsförbundet 98-02. Ombud, Landstingsförbundets kongress 99-04.",
            "typ": "biografi"
          },
          {
            "kod": "Uppdrag inom förenings- och näringsliv",
            "uppgift": "Vice riksordförande, Moderat Skolungdom 92-94. Styrelseledamot, Moderaterna i Vara kommun och Moderaterna i Skaraborg. F.d. gruppledare, Moderaterna i Västsverige. Ledamot, Moderaternas partistyrelse 99-05. Styrelseledamot, Skaraortens ryttarförening.",
            "typ": "biografi"
          },
          {
            "kod": "Litteratur",
            "uppgift": "Stenen i handen på den starke (95, tillsammans med bl.a. Fredrik Reinfeldt).",
            "typ": "biografi"
          },
          {
            "kod": "Bostadsort",
            "uppgift": "Norra Vånga",
            "typ": "biografi"
          },
          {
            "kod": "Uppdrag inom riksdag och regering",
            "uppgift": "Riksdagsledamot 02-. Ledamot finansutskottet 05-06, socialutskottet 06-10 och 14-19, försvarsutskottet 10 och vice ordförande 10-14, sammansatta utrikes- och försvarsutskottet 10, 11 och 13 och vice ordförande 11, 12, 13 och 14 samt skatteutskottet 18-. Suppleant finansutskottet 02-05, skatteutskottet 02, miljö- och jordbruksutskottet 02-10, sammansatta justitie- och socialutskottet 08 och utrikesutskottet 18-. Ledamot krigsdelegationen 10-18, riksdagens delegation till Natos parlamentariska församling 10-12 och ordförande 12-14. Ordförande riksdagens delegation till Interparlamentariska unionen 18-. Suppleant Nordiska rådets svenska delegation 02-18, Utrikesnämnden 10-14, riksdagsstyrelsen 10-18 och riksdagens valberedning 14-18. ",
            "typ": "biografi"
          },
          {
            "kod": "Föräldrar",
            "uppgift": "Ekonomen Lars Widegren och marknadschefen Ann-Marie Widegren, f. Pantzar-Ohlsson.",
            "typ": "biografi"
          },
          {
            "kod": "Utbildning",
            "uppgift": "Gymnasieskola, ekonomisk linje, Bergska skolan i Finspång. Gymnasiediplom, Kingsburg High School, Kalifornien, USA 91. Gymnasieskola, Skara katedralskola, slutår 93. Certifierad, Hawaii Pacific University, USA 98. Pol.mag.-studier, Linköpings universitet.",
            "typ": "biografi"
          },
          {
            "kod": "Webbsida",
            "uppgift": "http://www.moderatvg.se/widegren",
            "typ": "eadress"
          },
          {
            "kod": "Övriga webbsidor",
            "uppgift": "http://https://www.facebook.com/cecilia.widegren.7",
            "typ": "eadress"
          },
          {
            "kod": "Officiell e-postadress",
            "uppgift": "cecilia.widegren[på]riksdagen.se",
            "typ": "eadress"
          },
          {
            "kod": "Övriga webbsidor",
            "uppgift": "http://https://www.instagram.com/ceciliawidegren/",
            "typ": "eadress"
          },
          {
            "kod": "Övriga webbsidor",
            "uppgift": "http://https://www.facebook.com/cecilia.widegren.7",
            "typ": "eadress"
          },
          {
            "kod": "Övriga webbsidor",
            "uppgift": "http://https://www.linkedin.com/in/cecilia-widegren-7bb7714/",
            "typ": "eadress"
          },
          {
            "kod": "Tjänstetelefon",
            "uppgift": "65497",
            "typ": "telefonnummer"
          },
          {
            "kod": "sv",
            "uppgift": "Handläggare.",
            "typ": "titlar"
          },
          {
            "kod": "en",
            "uppgift": "Administrative Officer",
            "typ": "titlar"
          },
          {
            "kod": "KandiderarINastaVal",
            "uppgift": "true",
            "typ": "val"
          }
        ]
      },
      {
        "personId": "d7c329b4-83e4-11d4-ae60-0050040c9b55",
        "foddAr": "1974",
        "kon": "kvinna",
        "efternamn": "Larsson",
        "tilltalsnamn": "Hillevi",
        "parti": "S",
        "valkrets": "Malmö kommun",
        "status": "Tjänstgörande riksdagsledamot",
        "bildUrl": "http://data.riksdagen.se/filarkiv/bilder/ledamot/d7c329b4-83e4-11d4-ae60-0050040c9b55_max.jpg",
        "uppdrag": [
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2018-09-24",
            "tom": "2022-09-26",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2014-09-29",
            "tom": "2018-09-24",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2012-01-01",
            "tom": "2014-09-29",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Ledig",
            "typ": "kammaruppdrag",
            "from": "2011-11-01",
            "tom": "2011-12-31",
            "uppgift": "Rose-Marie Carlsson 2011-11-01 - 2011-12-31  Föräldraledighet"
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2011-07-01",
            "tom": "2011-10-31",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Ledig",
            "typ": "kammaruppdrag",
            "from": "2010-12-01",
            "tom": "2011-06-30",
            "uppgift": "Luciano Astudillo 2010-12-01 - 2011-06-30  Föräldraledighet"
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2010-10-04",
            "tom": "2010-11-30",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2009-10-17",
            "tom": "2010-10-04",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Ledig",
            "typ": "kammaruppdrag",
            "from": "2009-09-14",
            "tom": "2009-10-16",
            "uppgift": "Rose-Marie Carlsson 2009-09-14 - 2009-10-16"
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2009-01-02",
            "tom": "2009-09-13",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Ledig",
            "typ": "kammaruppdrag",
            "from": "2008-06-09",
            "tom": "2009-01-01",
            "uppgift": "Rose-Marie Carlsson 2008-06-09 - 2009-01-01"
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2006-10-02",
            "tom": "2008-06-08",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2004-11-01",
            "tom": "2006-10-02",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Statsrådsersättare",
            "status": "Ersättare",
            "typ": "kammaruppdrag",
            "from": "2002-09-30",
            "tom": "2004-10-31",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Ersättare",
            "status": "Ersättare",
            "typ": "kammaruppdrag",
            "from": "1998-11-23",
            "tom": "2002-09-30",
            "uppgift": "Lars-Erik Lövdén"
          },
          {
            "organKod": "SkU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2018-10-02",
            "tom": "2022-09-26",
            "uppgift": "Skatteutskottet"
          },
          {
            "organKod": "AU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Arbetsmarknadsutskottet"
          },
          {
            "organKod": "CU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2018-10-02",
            "tom": "2022-09-26",
            "uppgift": "Civilutskottet"
          },
          {
            "organKod": "FiU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Finansutskottet"
          },
          {
            "organKod": "JuU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Justitieutskottet"
          },
          {
            "organKod": "KrU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Kulturutskottet"
          },
          {
            "organKod": "MJU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Miljö- och jordbruksutskottet"
          },
          {
            "organKod": "NU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Näringsutskottet"
          },
          {
            "organKod": "SfU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Socialförsäkringsutskottet"
          },
          {
            "organKod": "SoU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Socialutskottet"
          },
          {
            "organKod": "TU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Trafikutskottet"
          },
          {
            "organKod": "UbU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Utbildningsutskottet"
          },
          {
            "organKod": "FöU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Försvarsutskottet"
          },
          {
            "organKod": "KU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Konstitutionsutskottet"
          },
          {
            "organKod": "UU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Utrikesutskottet"
          },
          {
            "organKod": "CU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2017-07-01",
            "tom": "2018-09-24",
            "uppgift": "Civilutskottet"
          },
          {
            "organKod": "SkU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2014-10-07",
            "tom": "2018-09-24",
            "uppgift": "Skatteutskottet"
          },
          {
            "organKod": "CU",
            "rollKod": "Vice ordförande",
            "status": "",
            "typ": "uppdrag",
            "from": "2017-03-02",
            "tom": "2017-06-30",
            "uppgift": "Civilutskottet"
          },
          {
            "organKod": "CU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2016-01-01",
            "tom": "2017-03-02",
            "uppgift": "Civilutskottet"
          },
          {
            "organKod": "CU",
            "rollKod": "Vice ordförande",
            "status": "",
            "typ": "uppdrag",
            "from": "2015-09-18",
            "tom": "2015-12-31",
            "uppgift": "Civilutskottet"
          },
          {
            "organKod": "CU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2014-10-07",
            "tom": "2015-09-18",
            "uppgift": "Civilutskottet"
          },
          {
            "organKod": "CU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2010-10-12",
            "tom": "2014-09-29",
            "uppgift": "Civilutskottet"
          },
          {
            "organKod": "SkU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2010-10-12",
            "tom": "2014-09-29",
            "uppgift": "Skatteutskottet"
          },
          {
            "organKod": "CU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2006-10-10",
            "tom": "2010-10-04",
            "uppgift": "Civilutskottet"
          },
          {
            "organKod": "JuU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2006-10-10",
            "tom": "2010-10-04",
            "uppgift": "Justitieutskottet"
          },
          {
            "organKod": "KrU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "1998-12-18",
            "tom": "2002-09-30",
            "uppgift": "Kulturutskottet"
          },
          {
            "organKod": "CKrU",
            "rollKod": "Deputerad",
            "status": "",
            "typ": "uppdrag",
            "from": "2018-03-13",
            "tom": "2018-05-24",
            "uppgift": "Sammansatta civil- och kulturutskottet"
          },
          {
            "organKod": "LU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2002-10-08",
            "tom": "2006-10-02",
            "uppgift": "Lagutskottet"
          },
          {
            "organKod": "EUN",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-10-04",
            "uppgift": "EU-nämnden"
          },
          {
            "organKod": "EUN",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2006-10-10",
            "tom": "2009-01-14",
            "uppgift": "EU-nämnden"
          },
          {
            "organKod": "EUN",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2002-10-08",
            "tom": "2006-10-10",
            "uppgift": "EU-nämnden"
          }
        ],
        "uppgifter": [
          {
            "kod": "Uppdrag inom riksdag och regering",
            "uppgift": "Riksdagsledamot 98- (statsrådsersättare 981123-041031). Ledamot lagutskottet 02-06, civilutskottet 06-15, 16-18 och vice ordförande 15-17 samt sammansatta civil- och kulturutskottet 18. Ledamot EU-nämnden 02-06. Suppleant kulturutskottet 98-02, justitieutskottet 06-10, skatteutskottet 10-18 och civilutskottet 18-. Suppleant EU-nämnden 06-09.",
            "typ": "biografi"
          },
          {
            "kod": "Föräldrar",
            "uppgift": "Yrkesinspektören Gunnar Larsson och bibliotekarien Birgitta Strandsjö.",
            "typ": "biografi"
          },
          {
            "kod": "Utbildning",
            "uppgift": "Gymnasieskola, musikinriktning 91-92. Statsvetenskaplig-humanistisk linje, komvux 93-94. Journalistlinjen, Skurups folkhögskola 98.",
            "typ": "biografi"
          },
          {
            "kod": "Anställningar",
            "uppgift": "EU-informatör/debattör 94. Politisk sekreterare, Malmö kommun 96-98.",
            "typ": "biografi"
          },
          {
            "kod": "Uppdrag inom statliga myndigheter m.m.",
            "uppgift": "Styrelseledamot, Ungdomsstyrelsen 00-02. Ledamot, EU 2004-kommittén 02-06. Ordförande, Expertgruppen för miljöstudier 06-07. Styrelseledamot, Teracom 06-07. Ledamot, parlamentarisk referensgrupp till 2014 års vårdnadsutredning 15-.",
            "typ": "biografi"
          },
          {
            "kod": "Kommunala uppdrag",
            "uppgift": "Ledamot, biblioteksnämnden, Malmö 94-95. Stadsdelsfullmäktig, Västra innerstaden 95-98.",
            "typ": "biografi"
          },
          {
            "kod": "Uppdrag inom förenings- och näringsliv",
            "uppgift": "Ordförande, Republikanska föreningen 05-08, valberedningen 08-10. Ordförande, S-kvinnor Malmö 08-19. Ordförande, Global (s) internationella förening 05-07, suppleant 07-11. Suppleant, Malmö arbetarekommuns styrelse (Socialdemokraterna i Malmö). Suppleant, Broderskaps styrelse Malmö 09-11. Suppleant, S-kvinnors förbundsstyrelse 07-09, ledamot 09-19. Tidigare ledamot, EU-utskottet och internationella utskottet, Socialdemokraterna i Skåne. Tidigare suppleant Västra innerstadens S-förening. Suppleant, ESP (Europeiska Socialdemokraters Parti) Skåne 10-. Ledamot, Radio A stödförening Malmö 09-11. Adjungerad, Fosie socialdemokratiska förening 06-. Ledamot, riksdagens hbt-grupp 98-06, suppleant 06-. Sammankallande, RRS (Riksdagens Republikanska Sällskap) 05-. Sammankallande, Riksdagens nätverk för Västsahara 98-11. Valberedningen, Avantgarde Skåne 08-. Revisor, S-kvinnoklubben KARL Malmö 08-. Revisorsersättare, Västra innerstadens S-förening 09-. Revisorsersättare, Unga sossars-förening 10-. Adjungerad, Skånes S-kvinnor 11- och vice ordförande S-kvinnor 11-. ",
            "typ": "biografi"
          },
          {
            "kod": "Litteratur",
            "uppgift": "Riskera allt för en dröm (04), För Sverige - Nuförtiden. En antologi om Carl XVI Gustaf (06, tillsammans med andra), Eureka! vägar ut ur krisen (06, tillsammans med andra) och Oböjligt: kvinnor om reumatism (06, tillsammans med andra).",
            "typ": "biografi"
          },
          {
            "kod": "Officiell e-postadress",
            "uppgift": "hillevi.larsson[på]riksdagen.se",
            "typ": "eadress"
          },
          {
            "kod": "Övriga webbsidor",
            "uppgift": "http://hillevilarsson.blogspot.se/",
            "typ": "eadress"
          },
          {
            "kod": "Tjänstetelefon",
            "uppgift": "64399",
            "typ": "telefonnummer"
          },
          {
            "kod": "sv",
            "uppgift": "Politisk sekreterare.",
            "typ": "titlar"
          },
          {
            "kod": "en",
            "uppgift": "Political Adviser",
            "typ": "titlar"
          },
          {
            "kod": "KandiderarINastaVal",
            "uppgift": "true",
            "typ": "val"
          }
        ]
      },
      {
        "personId": "2d7334ea-9a6f-4381-b6ec-3c46d744cb9a",
        "foddAr": "1974",
        "kon": "kvinna",
        "efternamn": "Lindberg",
        "tilltalsnamn": "Teres",
        "parti": "S",
        "valkrets": "Stockholms kommun",
        "status": "Tjänstgörande riksdagsledamot",
        "bildUrl": "http://data.riksdagen.se/filarkiv/bilder/ledamot/2d7334ea-9a6f-4381-b6ec-3c46d744cb9a_max.jpg",
        "uppdrag": [
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2018-09-24",
            "tom": "2022-09-26",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2017-09-25",
            "tom": "2018-09-24",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Statsrådsersättare",
            "status": "Ersättare",
            "typ": "kammaruppdrag",
            "from": "2017-05-29",
            "tom": "2017-09-24",
            "uppgift": "Stefan Löfven"
          },
          {
            "organKod": "kam",
            "rollKod": "Statsrådsersättare",
            "status": "Ersättare",
            "typ": "kammaruppdrag",
            "from": "2015-10-01",
            "tom": "2017-05-28",
            "uppgift": "Anders Ygeman"
          },
          {
            "organKod": "kam",
            "rollKod": "Statsrådsersättare",
            "status": "Ersättare",
            "typ": "kammaruppdrag",
            "from": "2014-10-03",
            "tom": "2015-09-30",
            "uppgift": "Ylva Johansson"
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2013-01-01",
            "tom": "2014-09-29",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Ledig",
            "typ": "kammaruppdrag",
            "from": "2012-07-15",
            "tom": "2012-12-31",
            "uppgift": "Sven Britton 2012-07-15 - 2012-12-31  Föräldraledighet"
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2011-04-01",
            "tom": "2012-07-14",
            "uppgift": ""
          },
          {
            "organKod": "TU",
            "rollKod": "Tredje vice ordförande",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-09-10",
            "tom": "2022-09-26",
            "uppgift": "Trafikutskottet"
          },
          {
            "organKod": "AU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Arbetsmarknadsutskottet"
          },
          {
            "organKod": "CU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Civilutskottet"
          },
          {
            "organKod": "FiU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2018-10-02",
            "tom": "2022-09-26",
            "uppgift": "Finansutskottet"
          },
          {
            "organKod": "JuU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Justitieutskottet"
          },
          {
            "organKod": "KrU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Kulturutskottet"
          },
          {
            "organKod": "MJU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Miljö- och jordbruksutskottet"
          },
          {
            "organKod": "NU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Näringsutskottet"
          },
          {
            "organKod": "SfU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Socialförsäkringsutskottet"
          },
          {
            "organKod": "SkU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Skatteutskottet"
          },
          {
            "organKod": "SoU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Socialutskottet"
          },
          {
            "organKod": "UbU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Utbildningsutskottet"
          },
          {
            "organKod": "TU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2018-10-02",
            "tom": "2022-09-09",
            "uppgift": "Trafikutskottet"
          },
          {
            "organKod": "FöU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Försvarsutskottet"
          },
          {
            "organKod": "KU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Konstitutionsutskottet"
          },
          {
            "organKod": "UU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Utrikesutskottet"
          },
          {
            "organKod": "FöU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2016-06-09",
            "tom": "2018-09-24",
            "uppgift": "Försvarsutskottet"
          },
          {
            "organKod": "TU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2014-10-07",
            "tom": "2018-09-24",
            "uppgift": "Trafikutskottet"
          },
          {
            "organKod": "SkU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2012-09-27",
            "tom": "2014-09-29",
            "uppgift": "Skatteutskottet"
          },
          {
            "organKod": "SoU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2011-04-13",
            "tom": "2012-09-27",
            "uppgift": "Socialutskottet"
          },
          {
            "organKod": "EUN",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-10-07",
            "tom": "2022-10-04",
            "uppgift": "EU-nämnden"
          },
          {
            "organKod": "EUN",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2018-10-09",
            "tom": "2020-10-06",
            "uppgift": "EU-nämnden"
          },
          {
            "organKod": "EUN",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2018-01-01",
            "tom": "2018-01-01",
            "uppgift": "EU-nämnden"
          },
          {
            "organKod": "EUN",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2013-01-16",
            "tom": "2014-09-29",
            "uppgift": "EU-nämnden"
          },
          {
            "organKod": "DEM",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2020-02-11",
            "tom": "2022-10-31",
            "uppgift": "Riksdagens styrgrupp för bilaterala demokratifrämjande samarbete"
          },
          {
            "organKod": "IPU",
            "rollKod": "Vice ordförande",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2018-10-24",
            "tom": "2020-09-28",
            "uppgift": "Riksdagens delegation till Interparlamentariska unionen"
          },
          {
            "organKod": "IPU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2014-10-28",
            "tom": "2018-10-24",
            "uppgift": "Riksdagens delegation till Interparlamentariska unionen"
          }
        ],
        "uppgifter": [
          {
            "kod": "Uppdrag inom riksdag och regering",
            "uppgift": "Riksdagsledamot 11- (statsrådsersättare 141003-170924). Ledamot trafikutskottet 18-. Suppleant socialutskottet 11-12, skatteutskottet 12-14, EU-nämnden 13-14 och 18-, trafikutskottet 14-18, försvarsutskottet 16-18 och finansutskottet 18-. Ledamot riksdagens delegation till Interparlamentariska unionen 14-18, vice ordförande 18-.   ",
            "typ": "biografi"
          },
          {
            "kod": "Utbildning",
            "uppgift": "Runö folkhögskola 95-96. Arbetsmarknadskunskap, Stockholms universitet 98-99.",
            "typ": "biografi"
          },
          {
            "kod": "Anställningar",
            "uppgift": "Paketsorterare, Posten 92-02. Samordnare, Seko Stockholm 96-97. Projektledare, SSU-förbundet 97-98. Projektledare, Seko 00-01. ",
            "typ": "biografi"
          },
          {
            "kod": "Kommunala uppdrag",
            "uppgift": "Kommunfullmäktig, Stockholm 99-10, ersättare 98-99 och 10-11. Ledamot, kommunstyrelsen 06-10 och ersättare 05-06. Ersättare, kommunstyrelsens ekonomiutskott 05-06. Styrelseledamot, Stockholm Entreprenad 96-98 och Skärgårdsstiftelsen i Stockholms län 99-02. Ledamot, gatu- och fastighetsnämnden 00-02. Borgarråd, Stockholms kommun 02-06. Ordförande integrationsnämnden 02-04. Suppleant, Stockholms Stadshus AB 03-11. Ordförande, arbetsmarknadsnämnden i Stockholm 03-05. Ordförande, styrelsen för Stockholms Stads Bostadsförmedling AB 03-05. Ordförande, arbetsmarknads- och integrationsberedning 03-06. Ordförande, AB Svenska Bostäder 05-06. Ordförande, AB Stadsholmen 05-06. Ledamot, personal- och jämställdhetsutskottet 06-10. Vice ordförande, AB Svenska Bostäder 06-11. Vice ordförande, AB Stadsholmen 06-11. Vice ordförande, stadsbyggnadsnämnden 07-10. Ersättare, miljö- och hälsoskyddsnämnden 11. ",
            "typ": "biografi"
          },
          {
            "kod": "Uppdrag inom förenings- och näringsliv",
            "uppgift": "Ledamot, Stockholms arbetarekommun 98-14 och vice ordförande 11-14. Ordförande, ABF Stockholm 11-19. Vice ordförande, ABF Stockholms län 12-. Ledamot, ABF förbundsstyrelse 14-. Ledamot, Aktiebolaget ABF-Huset Stockholm 11-, Elvira kunskapsutveckling AB 13- och Cirkeln servering AB 15-. ",
            "typ": "biografi"
          },
          {
            "kod": "Officiell e-postadress",
            "uppgift": "teres.lindberg[på]riksdagen.se",
            "typ": "eadress"
          },
          {
            "kod": "Tjänstetelefon",
            "uppgift": "64645",
            "typ": "telefonnummer"
          },
          {
            "kod": "KandiderarINastaVal",
            "uppgift": "true",
            "typ": "val"
          }
        ]
      },
      {
        "personId": "3badc18d-3c4a-4068-921a-b5fa8a9652d6",
        "foddAr": "1965",
        "kon": "man",
        "efternamn": "Larsson",
        "tilltalsnamn": "Lars Mejern",
        "parti": "S",
        "valkrets": "Värmlands län",
        "status": "Tjänstgörande riksdagsledamot",
        "bildUrl": "http://data.riksdagen.se/filarkiv/bilder/ledamot/3badc18d-3c4a-4068-921a-b5fa8a9652d6_max.jpg",
        "uppdrag": [
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2018-09-24",
            "tom": "2022-09-26",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2014-09-29",
            "tom": "2018-09-24",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2010-10-04",
            "tom": "2014-09-29",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Tjänstgörande",
            "typ": "kammaruppdrag",
            "from": "2006-10-02",
            "tom": "2010-10-04",
            "uppgift": ""
          },
          {
            "organKod": "kam",
            "rollKod": "Riksdagsledamot",
            "status": "Ersättare",
            "typ": "kammaruppdrag",
            "from": "2005-03-01",
            "tom": "2005-05-26",
            "uppgift": ""
          },
          {
            "organKod": "KrU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2018-10-02",
            "tom": "2022-09-26",
            "uppgift": "Kulturutskottet"
          },
          {
            "organKod": "AU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Arbetsmarknadsutskottet"
          },
          {
            "organKod": "CU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Civilutskottet"
          },
          {
            "organKod": "FiU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Finansutskottet"
          },
          {
            "organKod": "JuU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Justitieutskottet"
          },
          {
            "organKod": "MJU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Miljö- och jordbruksutskottet"
          },
          {
            "organKod": "NU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Näringsutskottet"
          },
          {
            "organKod": "SfU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Socialförsäkringsutskottet"
          },
          {
            "organKod": "SkU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Skatteutskottet"
          },
          {
            "organKod": "SoU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Socialutskottet"
          },
          {
            "organKod": "TU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Trafikutskottet"
          },
          {
            "organKod": "UbU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-09-26",
            "uppgift": "Utbildningsutskottet"
          },
          {
            "organKod": "FöU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Försvarsutskottet"
          },
          {
            "organKod": "KU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Konstitutionsutskottet"
          },
          {
            "organKod": "UU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2020-09-03",
            "uppgift": "Utrikesutskottet"
          },
          {
            "organKod": "TU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2014-10-07",
            "tom": "2018-09-24",
            "uppgift": "Trafikutskottet"
          },
          {
            "organKod": "AU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2014-12-03",
            "tom": "2018-09-24",
            "uppgift": "Arbetsmarknadsutskottet"
          },
          {
            "organKod": "TU",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "uppdrag",
            "from": "2010-10-12",
            "tom": "2014-09-29",
            "uppgift": "Trafikutskottet"
          },
          {
            "organKod": "AU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2010-10-19",
            "tom": "2014-09-29",
            "uppgift": "Arbetsmarknadsutskottet"
          },
          {
            "organKod": "KrU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2006-10-10",
            "tom": "2010-10-04",
            "uppgift": "Kulturutskottet"
          },
          {
            "organKod": "TU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2006-10-10",
            "tom": "2010-10-04",
            "uppgift": "Trafikutskottet"
          },
          {
            "organKod": "NU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2005-03-01",
            "tom": "2005-05-26",
            "uppgift": "Näringsutskottet"
          },
          {
            "organKod": "SoU",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2005-03-01",
            "tom": "2005-05-26",
            "uppgift": "Socialutskottet"
          },
          {
            "organKod": "EUN",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2020-03-18",
            "tom": "2022-10-04",
            "uppgift": "EU-nämnden"
          },
          {
            "organKod": "EUN",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "uppdrag",
            "from": "2011-06-13",
            "tom": "2014-10-07",
            "uppgift": "EU-nämnden"
          },
          {
            "organKod": "NR",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2021-10-13",
            "tom": "2022-10-31",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "NR",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2020-10-14",
            "tom": "2021-10-13",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "NR",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2019-10-02",
            "tom": "2020-10-14",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "NR",
            "rollKod": "Ledamot",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2018-10-09",
            "tom": "2019-10-02",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2017-09-28",
            "tom": "2018-10-09",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "VB",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2014-09-29",
            "tom": "2018-09-24",
            "uppgift": "Valberedningen"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2016-09-29",
            "tom": "2017-09-28",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2015-10-01",
            "tom": "2016-09-29",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "NR",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2015-06-22",
            "tom": "2015-10-01",
            "uppgift": "Nordiska rådets svenska delegation"
          },
          {
            "organKod": "VB",
            "rollKod": "Suppleant",
            "status": "",
            "typ": "Riksdagsorgan",
            "from": "2010-10-04",
            "tom": "2014-09-29",
            "uppgift": "Valberedningen"
          }
        ],
        "uppgifter": [
          {
            "kod": "Uppdrag inom riksdag och regering",
            "uppgift": "Riksdagsledamot 05 (ersättare 050301-050526) och 06-. Ledamot trafikutskottet 10-18 och kulturutskottet 18-.  Suppleant näringsutskottet 05, socialutskottet 05, kulturutskottet 06-10, trafikutskottet 06-10, arbetsmarknadsutskottet 10- och EU-nämnden 11-14. Ledamot Nordiska rådets svenska delegation 18-. Suppleant riksdagens valberedning 10-18 och Nordiska rådets svenska delegation 15-18.",
            "typ": "biografi"
          },
          {
            "kod": "Föräldrar",
            "uppgift": "Metallarbetaren Lars-Göran Larsson och bibliotekskanslisten Henny Högberg, f. Johansson.",
            "typ": "biografi"
          },
          {
            "kod": "Utbildning",
            "uppgift": "Gymnasieskola, bygg och anläggning, Karlstad, slutår 83.",
            "typ": "biografi"
          },
          {
            "kod": "Anställningar",
            "uppgift": "Posten, Tomteboda och Karlstad 85-87. Snickare, Diös/Siab i Karlstad 87-95. Ombudsman, Bygg 29:an i Värmland 95-06.",
            "typ": "biografi"
          },
          {
            "kod": "Kommunala uppdrag",
            "uppgift": "Kommunfullmäktig, Karlstad 98-06. Ledamot, kommunstyrelsen 02-06. Ersättare, kollektivtrafiknämnden 95-98 och tillväxtutskottet. Ledamot, fritidsnämnden 99-02 och arbetsgruppen för demokratifrågor 99-01. Ordförande, tekniska nämnden 03-. Ersättare, Region Värmland kommunalförbund 03. Suppleant, Karlstad Stadshus AB och Helax bränsleutveckling AB 05-06. Ledamot, Karlstad-Grums vattenförbund och Stiftelsen Karlstads studentbostäder 03.",
            "typ": "biografi"
          },
          {
            "kod": "Uppdrag inom förenings- och näringsliv",
            "uppgift": "Ledamot, Socialdemokraterna i Norrstrand i Karlstad och Byggfackens Socialdemokratiska förening. Ledamot, Socialdemokraterna i Värmlands distriktsstyrelse. Styrelseledamot, Bygg 29:an Värmland, LO Värmland, Värmlands Folkblad AB, Riksbyggen Värmland, TBM Utbildning AB, RYK Värmland, Byggarbetsnämnden Värmland, Byggnads förbundsfullmäktige, VVS-branchens yrkeskommitté och NTF Värmland. ",
            "typ": "biografi"
          },
          {
            "kod": "Officiell e-postadress",
            "uppgift": "lars.mejern.larsson[på]riksdagen.se",
            "typ": "eadress"
          },
          {
            "kod": "Tjänstetelefon",
            "uppgift": "64765",
            "typ": "telefonnummer"
          },
          {
            "kod": "sv",
            "uppgift": "Ombudsman.",
            "typ": "titlar"
          },
          {
            "kod": "en",
            "uppgift": "",
            "typ": "titlar"
          },
          {
            "kod": "KandiderarINastaVal",
            "uppgift": "true",
            "typ": "val"
          }
        ]
      }] as Array<IPerson>

    return of(personer);

    /*const url = `${this.baseUrl}/person`;
    const params: HttpParams = new HttpParams();

    if (partiKod) {
      params.append('partiKod', partiKod);
    }

    if (utskottKod) {
      params.append('utskottKod', utskottKod);
    }

    return this.httpClient
      .get<Array<IPerson>>(url, { params: params });*/
  }

  getPerson(personId: string): Observable<IPerson> {
    const url = `${this.baseUrl}/person/${personId}`;

    return this.httpClient
      .get<IPerson>(url);
  }
}
