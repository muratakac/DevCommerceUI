import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import { ProductDetail } from "./productDetail";
import { Observable } from 'rxjs';

// import { HttpParams } from '@angular/common/http';

@Injectable()
export class ProductdetailService {
    constructor(private http: HttpClient) { }

    getProducts(): Observable<ProductDetail[]> {
        // const params = new HttpParams().set('productId', productId);
        return this.http.get<ProductDetail[]>('http://northwindapi.azurewebsites.net/api/products');
    }


}
