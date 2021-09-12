import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductDetailResolverService } from './product-detail-resolver.service';

describe('ProductDetailResolverService', () => {
  let service: ProductDetailResolverService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ProductDetailResolverService],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();
  }));
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
