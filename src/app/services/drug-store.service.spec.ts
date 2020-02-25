import { TestBed } from '@angular/core/testing';

import { DrugStoreService } from './drug-store.service';

describe('DrugStoreService', () => {
  let service: DrugStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrugStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
