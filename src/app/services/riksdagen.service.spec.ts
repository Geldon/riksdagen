import { TestBed } from '@angular/core/testing';

import { RiksdagenService } from './riksdagen.service';

describe('RiksdagenService', () => {
  let service: RiksdagenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiksdagenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
