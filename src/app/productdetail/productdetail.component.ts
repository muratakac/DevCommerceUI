import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, CartProduct } from "../_models/references";
import { ProductService, AlertService } from "../_services/references";
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})

export class ProductdetailComponent implements OnInit, OnDestroy {
  private subscription: ISubscription;

  productDetail: Product;
  products: Product[];
  productId: number;
  cartProducts: any;

  constructor(private route: ActivatedRoute,
    private productDetailService: ProductService,
    private alertService: AlertService) {
    this.subscription = this.route.queryParams.subscribe(params => {
      this.productId = params['productId'];
    });
  }

  ngOnInit() {
    let data = localStorage.getItem('cart');
    if (data !== null) {
      this.cartProducts = JSON.parse(data);
    }

    this.subscription = this.productDetailService.getProductByProductId(this.productId)
      .subscribe(res => {
        //this.productDetail = res.find(x => x.productId == this.productId);
        this.productDetail = res;
      });
  }

  addToCart(quantity) {
    let product = this.productDetail;
    product.quantity = quantity;

    let cartData = [];
    let data = localStorage.getItem('cart');
    if (data !== null) {
      cartData = JSON.parse(data);
      if (cartData == null)
        cartData = [];
    }
    cartData.push(product);
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
    this.alertService.success('Ürün sepetinize eklendi', true);
  }
  updateCartData(cartData) {
    this.cartProducts = cartData;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

// this.productDetail = res.shift(); => First Item
//localStorage.setItem("", "");
//localStorage.getItem("");