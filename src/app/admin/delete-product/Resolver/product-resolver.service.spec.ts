import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductResolverService } from './product-resolver.service';

describe('ProductResolverService', () => {
  let service: ProductResolverService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ProductResolverService],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();
  }));
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
