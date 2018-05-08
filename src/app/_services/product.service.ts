import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Product } from "../_models/references";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductService {
  url = "http://localhost:57443/api/Product/";
  token: string;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem("token");
  }

  getProducts(): Observable<Product[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':  this.token
      })
    };

    return this.http.get<Product[]>(
      // "http://northwindapi.azurewebsites.net/api/products"
      this.url, httpOptions
    );
  }

  getProductByProductId(productId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':  this.token
      })
    };

    return this.http.get<Product>(this.url + productId, httpOptions);
  }
}
