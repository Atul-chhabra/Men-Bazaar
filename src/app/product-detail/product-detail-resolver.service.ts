import { Injectable, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Params,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ProductDataService } from '../product-data.service';
import { Product } from '../products/product';

@Injectable()
export class ProductDetailResolverService implements OnInit, Resolve<Product> {
  id: number;

  ngOnInit() {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.prodServ.getProdDetails(route.paramMap.get('id'));
  }
  constructor(private prodServ: ProductDataService) {}
}
