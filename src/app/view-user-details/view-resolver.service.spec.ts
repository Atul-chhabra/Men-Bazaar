import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewResolverService } from './view-resolver.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ViewUserDetailsComponent } from './view-user-details.component';
describe('ViewResolverService', () => {
  let service: ViewResolverService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewUserDetailsComponent],
      providers: [ViewResolverService],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();
  }));
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
