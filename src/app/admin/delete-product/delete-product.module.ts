import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteProductRoutingModule } from './delete-product-routing.module';
import { DeleteProductComponent } from './delete-product.component';
import { ProductResolverService } from './Resolver/product-resolver.service';

@NgModule({
  declarations: [DeleteProductComponent],
  imports: [CommonModule, DeleteProductRoutingModule],
  providers: [ProductResolverService],
})
export class DeleteProductModule {}
