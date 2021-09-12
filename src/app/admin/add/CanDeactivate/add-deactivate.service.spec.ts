import { TestBed } from '@angular/core/testing';

import { AddDeactivateService } from './add-deactivate.service';

describe('AddDeactivateService', () => {
  let service: AddDeactivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddDeactivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
