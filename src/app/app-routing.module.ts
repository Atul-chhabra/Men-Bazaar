import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './products/product.component';
import { ProductDetailResolverService } from './product-detail/product-detail-resolver.service';
import { ProductResolverService } from './products/product-resolver.service';
import { AppComponent } from './app.component';
import { ViewUserDetailsComponent } from './view-user-details/view-user-details.component';
import { ViewResolverService } from './view-user-details/view-resolver.service';

import { CreateCanDeactivateService } from './account/create-account/create-can-deactivate.service';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    component: AboutComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
    resolve: {
      products: ProductResolverService,
    },
  },
  {
    path: 'charts',
    component: ChartsComponent,
    resolve: {
      products: ProductResolverService,
    },
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
    resolve: {
      productdetail: ProductDetailResolverService,
    },
  },
  {
    path: 'my-account',
    component: AccountComponent,
  },
  {
    path: 'sign-up',
    component: CreateAccountComponent,
    canDeactivate: [CreateCanDeactivateService],
  },
  {
    path: 'view/:id',
    component: ViewUserDetailsComponent,
    resolve: {
      viewresolve: ViewResolverService,
    },
  },
  {
    path: 'Add',
    loadChildren: () =>
      import('./admin/add/add.module').then((m) => m.AddModule),
  },
  {
    path: 'delete/:id',
    loadChildren: () =>
      import('./admin/delete-product/delete-product.module').then(
        (m) => m.DeleteProductModule
      ),
  },
  {
    path: 'update/:id',
    loadChildren: () =>
      import('./admin/update/update/update.module').then((m) => m.UpdateModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
