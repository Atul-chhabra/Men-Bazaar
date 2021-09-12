import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UpdateResolverService } from './update-resolver.service';

describe('UpdateResolverService', () => {
  let service: UpdateResolverService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [UpdateResolverService],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();
  }));
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
