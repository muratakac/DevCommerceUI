import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/references';

@Injectable()
export class UserService {
    url = "http://localhost:57443/api/account/register";
    token: string;
    constructor(private http: HttpClient) { 
        this.token = localStorage.getItem("token");
    }

    create(user: User) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization':  this.token
            })
          };
        return this.http.post(this.url, user, httpOptions);
    }
}
