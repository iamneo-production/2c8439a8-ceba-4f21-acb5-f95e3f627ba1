import { TestBed } from '@angular/core/testing';

import { FavdataService } from './favdata.service';

describe('FavdataService', () => {
  let service: FavdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
