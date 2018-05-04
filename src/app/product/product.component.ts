import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
import { ProductService } from "./product.service";
import { Router, ActivatedRoute } from '@angular/router';

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
    this.route.queryParams.subscribe(params => {
      this.categoryId = params['categoryId'];
      this.getProducts();
    });
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(res => {
      if (this.categoryId !== undefined) {
        this.products = res.filter(x => x.categoryId == this.categoryId);
      }
      else {
        this.products = res;
      }
    });
  }
}
