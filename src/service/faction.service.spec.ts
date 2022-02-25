import { TestBed } from '@angular/core/testing';

import { FactionService } from './faction.service';

describe('FactionService', () => {
  let service: FactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
