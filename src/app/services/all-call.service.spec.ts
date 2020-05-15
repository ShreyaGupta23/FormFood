import { TestBed } from '@angular/core/testing';

import { AllCallService } from './all-call.service';

describe('AllCallService', () => {
  let service: AllCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
