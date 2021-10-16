import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Votering } from 'src/models/votering.object';
import { IVotering } from 'src/models/votering.interface';
import { IUtskott } from 'src/models/utskott.interface';

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
}
