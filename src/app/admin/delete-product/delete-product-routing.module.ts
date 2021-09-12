import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductResolverService } from './Resolver/product-resolver.service';

import { DeleteProductComponent } from './delete-product.component';

const routes: Routes = [
  {
    path: '',
    component: DeleteProductComponent,
    resolve: {
      products: ProductResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteProductRoutingModule {}
