import { Injectable, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ProductDataService } from '../../../product-data.service';
import { Product } from '../../../products/product';

@Injectable({
  providedIn: 'root',
})
export class UpdateResolverService implements OnInit, Resolve<Product> {
  id: number;

  ngOnInit() {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    console.log(route.paramMap.get('id'));
    return this.prodServ.getProdDetails(route.paramMap.get('id'));
  }
  constructor(private prodServ: ProductDataService) {}
}
