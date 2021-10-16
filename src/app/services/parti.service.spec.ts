import { TestBed } from '@angular/core/testing';

import { PartiService } from './parti.service';

describe('PartiService', () => {
  let service: PartiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
