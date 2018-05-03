import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router'

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { BannerComponent } from './banner/banner.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Yönlendirme tanımları
const routes: Routes = [
  { path: '', redirectTo: "products", pathMatch: "full" },
  { path: "products", component: ProductComponent },
  { path: "products/:categoryId", component: ProductComponent },
  { path: "productdetail/:productId", component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    BannerComponent,
    CartComponent,
    LoginComponent,
    ProductDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
