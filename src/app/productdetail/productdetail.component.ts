import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetail } from './productDetail'
import { ProductdetailService } from './productdetail.service'

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
  constructor(private route: ActivatedRoute, private productDetailService: ProductdetailService) {
    this.route.queryParams.subscribe(params => {
      this.productId = params['productId'];
    });
  }

  ngOnInit() {
    // console.log(this.productId);
    this.productDetailService.getProducts()
      .subscribe(res => {
        this.productDetail = res.find(x => x.productId == this.productId);
        console.log(this.productDetail);
      });
  }
}

// this.productDetail = res.shift(); => First Item
