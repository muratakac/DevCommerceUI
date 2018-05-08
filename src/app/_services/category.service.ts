import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Http, Headers, RequestOptions } from '@angular/http';
import { Category } from "../_models/references";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CategoryService {
    url = "http://localhost:57443/api/categories/";

    constructor(private http: HttpClient) { }

    getCategories(): Observable<Category[]> {
        let token = localStorage.getItem("token");
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };

        return this.http.get<Category[]>(
            // "http://northwindapi.azurewebsites.net/api/categories"
            this.url, httpOptions
        );
    }
}
