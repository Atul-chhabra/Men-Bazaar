import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product';

@Pipe({
  name: 'prodFilter',
})
export class ProdFilterPipe implements PipeTransform {
  transform(product: Product[], searchTerm: string): Product[] {
    if (!product || !searchTerm) {
      return product;
    }
    return product.filter(
      (product) =>
        product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }
}
