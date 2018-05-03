import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Product } from "./product";
import { Observable } from "rxjs/Observable";

 @Injectable()
export class ProductService {
   constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(
      "http://northwindapi.azurewebsites.net/api/products"
    );
  }
}
