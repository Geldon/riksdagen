import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IUtskott } from 'src/models/utskott.interface';
import { IVotering } from 'src/models/votering.interface';
import { RiksdagenService } from './services/riksdagen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly title = 'riksdagen';
  readonly votering$: Observable<IVotering>;
  readonly utskott$: Observable<Array<IUtskott>>;

  constructor(private riksdagenService: RiksdagenService) {
    this.votering$ = this.riksdagenService.getVotering(5);
    this.utskott$ = this.riksdagenService.getUtskott();
  }
}
