import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, ActivatedRoute, PreloadAllModules } from '@angular/router'

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { BannerComponent } from './banner/banner.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

// Yönlendirme tanımları
const routes: Routes = [
  { path: '', redirectTo: "products", pathMatch: "full" },
  { path: "products/:categoryId", component: ProductComponent },
  { path: 'products', component: ProductComponent },
  { path: 'productdetail/:productId', component: ProductdetailComponent },
  { path: 'productdetail', component: ProductdetailComponent },
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
    NotFoundComponent,
    ProductdetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      // useHash: true,
      // preloadingStrategy: PreloadAllModules,
      // onSameUrlNavigation: 'reload',
      // enableTracing:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
