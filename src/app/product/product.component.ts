import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
import { ProductService } from "./product.service";
import { Router, ActivatedRoute } from '@angular/router';
import { tick } from "@angular/core/testing";
import { range } from "rxjs/observable/range";
import { Observer } from "rxjs";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
  providers: [ProductService]
})

export class ProductComponent implements OnInit {
  Math: any;

  categoryId: number;
  products: Product[];

  current: number = 1;
  currentPage: number = 0;
  pageSize: number = 9;
  totalSize: number;
  pageArray: number[] = new Array();;

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

      this.totalSize = Math.ceil(this.products.length / this.pageSize);
      this.products = this.products.slice(this.currentPage, this.pageSize + this.currentPage);

      this.pageArray = [];
      for (let index = 1; index <= this.totalSize; index++) {
        this.pageArray.push(index);
      }

    });
  }

  getPage(currentPage: number) {
    this.currentPage = (currentPage - 1) * 9;
    this.getProducts();
    this.current = currentPage;
  }
}
