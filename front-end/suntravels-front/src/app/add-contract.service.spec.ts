import { TestBed } from '@angular/core/testing';

import { AddContractService } from './add-contract.service';

describe('AddContractService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddContractService = TestBed.get(AddContractService);
    expect(service).toBeTruthy();
  });
});
