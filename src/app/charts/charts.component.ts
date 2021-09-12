import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from '../product-data.service';
import { Product } from '../products/product';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  dataSource: Object;
  productData: object;

  constructor(private activatedRoute: ActivatedRoute) {
    const chartData = [
      {
        label: 'Blackberry',
        value: '29',
      },
      {
        label: 'Marvel',
        value: '26',
      },
      {
        label: 'Arrow Sports',
        value: '18',
      },
      {
        label: 'Wrangler',
        value: '14',
      },
      {
        label: 'Proline',
        value: '15',
      },
      {
        label: 'ASICS',
        value: '10',
      },
      {
        label: 'Denim Jeans',
        value: '30',
      },
      {
        label: 'Levis',
        value: '30',
      },
    ];

    // STEP 3 - Chart Configuration
    this.dataSource = {
      chart: {
        caption: 'Most Viewed Products',
        subCaption: 'Products with Best Brands',
        xAxisName: 'Brands',
        yAxisName: 'Number of times viewed',

        theme: 'fusion',
      },

      // data: this.productData,
      data: chartData,
    };
  }

  ngOnInit(): void {
    this.productData = this.activatedRoute.snapshot.data['products'];
    console.log(this.productData);
  }
}
