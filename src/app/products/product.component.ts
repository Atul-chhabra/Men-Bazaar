import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from './product';
import { ProductDataService } from '../product-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';

import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'my-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productData: Product[];
  searchTerm: string;
  loginStatus: boolean = false;
  checked: boolean = false;
  Access: boolean = true;
  editMode = false;
  // @ViewChild('title') title: ElementRef;
  // @ViewChild('price') price: ElementRef;

  constructor(
    private serv: UserService,
    private prodServ: ProductDataService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  @ViewChild('form') data: NgForm;
  ngOnInit() {
    this.productData = this.activatedRoute.snapshot.data['products'];
    console.log(this.productData);
    this.isLogin();
  }
  isLogin() {
    if (this.serv.isLogin) {
      this.loginStatus = true;
    } else {
      this.loginStatus = false;
    }
  }
  routeTo(productid: number, count?: number) {
    console.log(productid);
    this.visit(count);
    if (this.loginStatus) {
      this.route.navigate(['/product', productid]);
    } else {
      alert('Please Login first to see Product Details');
    }
  }
  visit(count: number) {
    count = count + 1;
  }
  edit() {
    this.editMode = true;
  }
  getUserType() {
    // console.log(this.loginStatus);
    // console.log(this.serv.Type);
    if (this.loginStatus) {
      if (this.serv.Type == 'Admin') {
        return true;
      }
    }

    return false;
  }

  addProduct(productid?: number) {
    // this.route.navigate(['admin/update/' + productid]);
    this.route.navigate(['Add']);

    this.editMode = false;
  }
  deleteProduct(productid: number) {
    this.route.navigate(['delete', productid]);
  }
  update(productid: number) {
    this.route.navigate(['update', productid]);
  }

  sort(event: any) {
    switch (event.target.value) {
      case 'Low': {
        this.productData = this.productData.sort(
          (low, high) => low.price - high.price
        );
        break;
      }

      case 'High': {
        this.productData = this.productData.sort(
          (low, high) => high.price - low.price
        );
        break;
      }

      case 'Name': {
        this.productData = this.productData.sort(function (low, high) {
          if (low.title < high.title) {
            return -1;
          } else if (low.title > high.title) {
            return 1;
          } else {
            return 0;
          }
        });
        break;
      }

      default: {
        this.productData = this.productData.sort(
          (low, high) => low.price - high.price
        );
        break;
      }
    }
    return this.productData;
  }
}
