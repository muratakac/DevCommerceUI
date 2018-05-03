import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Category } from "./category";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CategoryService {

    constructor(private http: HttpClient) { }
    
    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(
            "http://northwindapi.azurewebsites.net/api/categories"
        );
    }
}
