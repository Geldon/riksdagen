import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RiksdagenService } from './services/riksdagen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'riksdagen';
  someData$: Observable<any>;

  constructor(private riksdagenService: RiksdagenService) {
    this.someData$ = this.riksdagenService.getSomeData();
  }
}
