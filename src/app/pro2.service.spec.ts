import { TestBed } from '@angular/core/testing';

import { Pro2Service } from './pro2.service';

describe('Pro2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Pro2Service = TestBed.get(Pro2Service);
    expect(service).toBeTruthy();
  });
});
