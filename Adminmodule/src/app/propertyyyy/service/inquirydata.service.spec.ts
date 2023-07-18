import { TestBed } from '@angular/core/testing';

import { InquirydataService } from './inquirydata.service';

describe('InquirydataService', () => {
  let service: InquirydataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InquirydataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
