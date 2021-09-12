import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ProductDataService } from '../product-data.service';
import { Product } from '../products/product';

@Injectable()
export class ProductResolverService implements Resolve<Product[]> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.prodServ.getProducts();
  }

  constructor(private prodServ: ProductDataService) {}
}
