import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { AccountComponent } from './account/account.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { AppRoutingModule } from '../app/app-routing.module';
import { ProductDetailResolverService } from './product-detail/product-detail-resolver.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductResolverService } from './products/product-resolver.service';
import { ViewUserDetailsComponent } from './view-user-details/view-user-details.component';
import { ViewResolverService } from './view-user-details/view-resolver.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CreateCanDeactivateService } from './account/create-account/create-can-deactivate.service';
import { ProdFilterPipe } from './products/Filter/prod-filter.pipe';
// import { ChartsComponent } from './charts/charts.component';
// import { FusionChartsModule } from 'angular-fusioncharts';
// // Import FusionCharts library and chart modules
// import * as FusionCharts from 'fusioncharts';
// import * as charts from 'fusioncharts/fusioncharts.charts';
// import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
    //  FusionChartsModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    HeaderComponent,
    AccountComponent,
    CreateAccountComponent,
    ProductComponent,
    ProductDetailComponent,
    ViewUserDetailsComponent,
    ProdFilterPipe,
    // ChartsComponent,
  ],
  providers: [
    ProductDetailResolverService,
    ProductResolverService,
    ViewResolverService,
    // UpdateResolverService,
    CreateCanDeactivateService,
    // AddDeactivateService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
