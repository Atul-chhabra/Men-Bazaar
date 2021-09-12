import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductDataService } from '../product-data.service';
import { Product } from '../products/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  products: Product;
  id: number;
  imgsrc: 'aaaa';
  constructor(
    private route: ActivatedRoute,
    private serv: ProductDataService
  ) {}
  savings() {}

  ngOnInit() {
    this.products = this.route.snapshot.data['productdetail'];
    console.log(this.products);
  }
}
