import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import {Http, Headers, RequestOptions} from '@angular/http';
import { Category } from "./category";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CategoryService {

    constructor(private http: HttpClient) { }
    
    getCategories(): Observable<Category[]> {
        const headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        const options = new RequestOptions({headers: headers});

        return this.http.get<Category[]>(
            // "http://northwindapi.azurewebsites.net/api/categories"
            "http://localhost:57443/api/categories/"
        );
    }
}
