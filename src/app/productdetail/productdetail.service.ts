import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProductDetail } from "./productDetail";
import { Observable } from "rxjs";

@Injectable()
export class ProductdetailService {
  url = "http://localhost:57443/api/Product/";
  constructor(private http: HttpClient) {}

  getProducts(productId: number): Observable<any> {
    return this.http.get<ProductDetail>(this.url + productId);
  }
}
