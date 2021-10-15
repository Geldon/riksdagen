import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RiksdagenService {
  constructor(private httpClient: HttpClient) {}

  getSomeData(): Observable<any> {
    const url =
      'http://data.riksdagen.se/voteringlista/?rm=2020%2F21&bet=&punkt=&parti=-&valkrets=&rost=&iid=&sz=500&utformat=json&gruppering=';

    return this.httpClient.get<any>(url).pipe(map((data: any) => data));
  }
}
