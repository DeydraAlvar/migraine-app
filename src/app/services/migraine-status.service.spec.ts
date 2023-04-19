import { TestBed } from '@angular/core/testing';

import { MigraineStatusService } from './migraine-status.service';

describe('MigraineStatusService', () => {
  let service: MigraineStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MigraineStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
