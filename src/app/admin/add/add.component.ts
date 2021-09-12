import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { ProductDataService } from 'src/app/product-data.service';
import { Product } from 'src/app/products/product';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  show: boolean = true;
  page: string = '';
  productData: Product[];

  idExist: boolean = false;
  idToUpdate: number;
  dataObject: Product;
  update: boolean;
  @ViewChild('form') data: NgForm;

  constructor(private serv: ProductDataService, private route: Router) {}

  ngOnInit(): void {}

  addProduct() {
    console.log(this.data.form.value);

    return this.serv
      .addProduct(this.data.form.value)
      .subscribe((data: Product) => {
        this.data.reset();
        alert('Product Added Successfully');

        this.route.navigate(['product']);
      });
  }

  close() {
    this.route.navigate(['/product']);
  }
}
