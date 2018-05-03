import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
import { ProductService } from "./product.service";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
  providers: [ProductService]
})


export class ProductComponent implements OnInit {
  categoryId: number;
  products: Product[];
  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {
    // this.route.queryParams.subscribe(params => {
    //   this.categoryId = params['categoryId'];
    // });
  }

  ngOnInit() {
    this.categoryId = this.route.queryParams['categoryId']
    this.getProducts();
    console.log("Init Çalıştı");
  }

  

  getProducts() {
    this.productService.getProducts().subscribe(res => {
      if (this.categoryId != null) {
        this.products = res.filter(x => x.CategoryId = this.categoryId);
        console.log("Koşula girdi");
      }
      else {
        this.products = res;
        console.log("Koşula girmedi");
      }
    });
  }

}
