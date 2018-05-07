import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetail } from './productDetail'
import { CartProduct } from './cartProduct'
import { ProductdetailService } from './productdetail.service'
import { Product } from '../product/product';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css'],
  providers: [ProductdetailService]
})

export class ProductdetailComponent implements OnInit {

  productDetail: ProductDetail;
  products: ProductDetail[];
  productId: number;
  cartProducts: any;

  constructor(private route: ActivatedRoute, private productDetailService: ProductdetailService) {
    this.route.queryParams.subscribe(params => {
      this.productId = params['productId'];
    });
  }

  ngOnInit() {
    let data = localStorage.getItem('cart');
    if (data !== null) {
      this.cartProducts = JSON.parse(data);
    }

    // console.log(this.productId);
    this.productDetailService.getProducts(this.productId)
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
  }
  updateCartData(cartData) {
    this.cartProducts = cartData;
  }
}

// this.productDetail = res.shift(); => First Item
//localStorage.setItem("", "");
//localStorage.getItem("");