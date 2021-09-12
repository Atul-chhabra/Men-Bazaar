import { TestBed } from '@angular/core/testing';

import { CreateCanDeactivateService } from './create-can-deactivate.service';

describe('CreateCanDeactivateService', () => {
  let service: CreateCanDeactivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCanDeactivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
