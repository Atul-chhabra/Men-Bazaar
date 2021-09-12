import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { ProductDataService } from 'src/app/product-data.service';
import { Product } from 'src/app/products/product';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  idToUpdate: number;
  obj: Product;
  dataObject: Product = {
    imgsrc: 'avc',
    price: 1222,
    title: '',
  };

  @ViewChild('update') updateOnId: NgForm;
  constructor(
    private route: Router,
    private serv: ProductDataService,
    private activateroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.obj = this.activateroute.snapshot.data['updateresolve'];
    console.log(this.obj.imgsrc);
    this.dataObject = this.obj;
    this.idToUpdate = this.activateroute.snapshot.params['id'];

    console.log(this.dataObject);
  }

  updateProduct() {
    this.serv
      .updateProduct(this.idToUpdate, this.updateOnId.form.value)
      .subscribe((data: Product) => {
        console.log(data);
        this.updateOnId.reset();
      });
    alert('Data Updated Successfully');
    this.route.navigate(['/product']);
  }
  close() {
    this.route.navigate(['/product']);
  }
}
