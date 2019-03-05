import { TestBed } from '@angular/core/testing';

import { Tugas3Service } from './tugas3.service';

describe('Tugas3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Tugas3Service = TestBed.get(Tugas3Service);
    expect(service).toBeTruthy();
  });
});
