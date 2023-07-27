import { TestBed } from '@angular/core/testing';

import { AgentdataService } from './agentdata.service';

describe('AgentdataService', () => {
  let service: AgentdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
