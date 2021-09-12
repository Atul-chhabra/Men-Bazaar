import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDataService } from 'src/app/product-data.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css'],
})
export class DeleteProductComponent implements OnInit {
  id: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private prodServ: ProductDataService,
    private route: Router
  ) {}
  productData: Product[];
  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');

    // this.products = this.route.snapshot.data['productdetail'];
    this.productData = this.activatedRoute.snapshot.data['products'];
    console.log(this.productData);
  }
  delete() {
    console.log(this.productData);
    // const index = this.productData.findIndex(x)
    // this.productData.splice(index);

    this.prodServ.deleteProduct(this.id).subscribe(() => {
      this.route.navigate(['product']);
    });
  }
  Close() {
    this.route.navigate(['product']);
  }
}
