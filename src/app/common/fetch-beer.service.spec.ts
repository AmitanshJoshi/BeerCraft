import { TestBed } from '@angular/core/testing';

import { FetchBeerService } from './fetch-beer.service';

describe('FetchBeerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchBeerService = TestBed.get(FetchBeerService);
    expect(service).toBeTruthy();
  });
});
